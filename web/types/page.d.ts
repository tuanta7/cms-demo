declare type ContentType = NodeType & {};

declare type PageType = NodeType & {
  title?: string;
  content: ContentType;
  header?: string;
  footer?: string;
  customHeader: NodeType;
  customFooter: NodeType;
};

declare type PageProps = {
  path: string;
  page: PageType;
  templateAnnotations?: TemplateAnnotationsType;
};
