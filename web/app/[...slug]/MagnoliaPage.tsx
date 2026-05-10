"use client";

import { IMagnoliaContext } from "@magnolia/frontend-helpers-base/types";
import { EditablePage } from "@magnolia/react-editor";
import config from "@/magnolia.config";

type MagnoliaPageProps = {
  page: PageType;
  ctx?: IMagnoliaContext;
  templateAnnotations?: TemplateAnnotationsType;
};

export default function MagnoliaPage({
  page,
  ctx,
  templateAnnotations,
}: MagnoliaPageProps) {
  return (
    <div
      className={ctx?.isMagnoliaEdit ? "disable-a-pointer-events grow" : "grow"}
    >
      <EditablePage
        content={page}
        config={config}
        magnoliaContext={ctx}
        templateAnnotations={templateAnnotations || {}}
      />
    </div>
  );
}
