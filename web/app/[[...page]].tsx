import { EditablePage } from "@magnolia/react-editor";
import { componentMap, pageMap } from "@/configs";

export default function Page({ page }: PageProps) {
  return (
    <div className="">
      <EditablePage
        content={page}
        config={{
          componentMappings: { ...componentMap, ...pageMap },
        }}
        // templateAnnotations={}
      />
    </div>
  );
}
