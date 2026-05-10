import ClientConfigRCC from '@/app/components/ClientConfigRCC';
import Navigation from '@/app/components/Navigation';
import {
  fetchPageContent,
  fetchPageNav,
  fetchTemplateAnnotations,
} from '@/app/services/magnolia-service';
import { environment } from '@/environments/environment';
import { config } from '@/magnolia.config';
import {
  EditorContextService,
  IMagnoliaContext,
  MgnlContent,
  MgnlTemplateAnnotations,
} from '@magnolia/frontend-helpers-base';
import { EditablePage } from '@magnolia/react-editor';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export const generateStaticParams = async () => {
  const languages = environment.languages;
  const base = environment.appBase;
  const pageNav = await fetchPageNav(base, environment.navBase);
  const slugs: { slug: string[] }[] = [];

  languages.forEach((language, index) => {
    if (index === 0) {
      slugs.push({ slug: [] });
      slugs.push({ slug: base.substring(1).split('/') });
    }
    slugs.push({ slug: [language] });
    slugs.push({ slug: [language, ...base.substring(1).split('/')] });

    pageNav['@nodes']?.forEach((nodeName: string) => {
      const path = (pageNav[nodeName] as MgnlContent)['@path'];
      const pathWithoutBase = path.substring(base.length + 1);
      const slug = path.substring(1).split('/');
      const slugWithoutBase = pathWithoutBase.split('/');

      if (index === 0) {
        slugs.push({ slug: slugWithoutBase });
        slugs.push({ slug: slug });
      }
      slugs.push({ slug: [language, ...slugWithoutBase] });
      slugs.push({ slug: [language, ...slug] });
    });
  });
  return slugs;
};

async function loadPageContent(uri: string, nodeName: string) {
  const props: {
    nodeName: string;
    page?: MgnlContent;
    pagenav?: MgnlContent;
    templateAnnotations?: MgnlTemplateAnnotations;
    magnoliaContext?: IMagnoliaContext;
  } = {
    nodeName,
  };

  props.nodeName = nodeName;

  const magnoliaContext = EditorContextService.getMagnoliaContext(
    uri,
    nodeName,
    environment.languages
  );
  props.magnoliaContext = magnoliaContext;

  const pageContent = await fetchPageContent(
    magnoliaContext,
    environment.pageBase
  );
  props.page = pageContent as MgnlContent;

  const pageNavContent = await fetchPageNav(nodeName, environment.navBase);
  props.pagenav = pageNavContent as MgnlContent;

  const templateAnnotationsContent = await fetchTemplateAnnotations(
    magnoliaContext,
    environment.templateAnnotationsBase
  );
  props.templateAnnotations =
    templateAnnotationsContent as MgnlTemplateAnnotations;

  return props;
}

type Params = Promise<{
  slug?: string[];
}>;
type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export default async function Page(pageProps: {
  params: Params;
  searchParams: SearchParams;
}) {
  const toUrlSearchParams = (
    searchParams: Record<string, string | string[] | undefined>
  ) => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (!value) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else {
        params.append(key, value);
      }
    });
    return params;
  };
  const buildUri = (
    slug: string | string[],
    searchParams: Record<string, string | string[] | undefined>
  ) => {
    const path = Array.isArray(slug) ? slug.join('/') : slug;
    const params = toUrlSearchParams(searchParams);
    return `/${path}?${params.toString()}`;
  };

  const isAuthor = process.env.MGNL_IS_PREVIEW?.toLocaleLowerCase() === 'true';
  const { slug } = await pageProps.params;
  let searchParams: Record<string, string | string[] | undefined> = {};
  if (isAuthor) {
    searchParams = await pageProps.searchParams;
  }
  const props = await loadPageContent(
    buildUri(slug || [], searchParams),
    environment.appBase
  );

  return (
    <>
      <ClientConfigRCC />
      <div
        className={
          props.magnoliaContext?.isMagnoliaEdit
            ? 'disable-a-pointer-events'
            : ''
        }
      >
        {props.pagenav && (
          <Navigation
            content={props.pagenav}
            nodeName={environment.appBase}
            currentLanguage={props.magnoliaContext?.currentLanguage || 'en'}
            isMagnoliaEdit={props.magnoliaContext?.isMagnoliaEdit || false}
          />
        )}
        {props.page && (
          <EditablePage
            templateAnnotations={props.templateAnnotations || {}}
            content={props.page}
            magnoliaContext={props.magnoliaContext}
            config={config}
          />
        )}
      </div>
    </>
  );
}
