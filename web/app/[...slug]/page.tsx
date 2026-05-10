import { EditorContextService } from "@magnolia/frontend-helpers-base";
import { getPage, getTemplateAnnotations } from "@/lib/magnolia/contents";
import { environments } from "@/lib/environments/environments";
import EditorRenderer from "./Renderer";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const path = "/".concat(slug.join("/"));
  const searchMap = await searchParams;
  const searchSring =
    Object.keys(searchMap).length > 0
      ? `?${new URLSearchParams(searchMap as Record<string, string>).toString()}`
      : "";

  const ctx = EditorContextService.getMagnoliaContext(
    path + searchSring,
    environments.mgnlSitePath,
    environments.mgnlLanguages,
  );

  console.log("Magnolia context:", ctx);

  const page = await getPage(path, ctx.search);

  console.log("Fetched page content:", page);

  const templateAnnotations = ctx.isMagnolia
    ? await getTemplateAnnotations(path, ctx.search)
    : undefined;

  console.log("Template annotations:", templateAnnotations);

  return (
    <EditorRenderer
      page={page}
      ctx={ctx}
      templateAnnotations={templateAnnotations}
    />
  );
}
