import { EditablePage } from "@magnolia/react-editor";
import { componentMap, pageMap } from "@/configs";
import { getPage, getTemplateAnnotations } from "@/lib/magnolia/contents";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const path = "/".concat(slug.join("/"));

  const page = await getPage(path);
  const templateAnnotations = await getTemplateAnnotations(path);

  return (
    <div className="">
      <EditablePage
        content={page}
        config={{
          componentMappings: { ...componentMap, ...pageMap },
        }}
        templateAnnotations={templateAnnotations}
      />
    </div>
  );
}
