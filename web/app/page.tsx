import { EditablePage } from "@magnolia/react-editor";
import { componentMap, pageMap } from "@/configs";

export default function HomePage({ page, templateAnnotations }: PageProps) {
  const path = "/manutd";

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
