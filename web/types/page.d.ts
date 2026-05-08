declare type PageType = NodeType & {
  footer?: string;
  header?: string;
};

declare type PageProps = {
  path: string;
  page: PageType;
  templateAnnotations?: TemplateAnnotationsType;
};
