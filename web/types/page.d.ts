declare type ContentType = NodeType & {
  "0": NodeType;
};

declare type PageType = NodeType & {
  title?: string;
  content: ContentType;
  header?: string;
  footer?: string;
  customHeader: ContentType;
  customFooter: ContentType;
  metadata: NodeType;
  hidden?: boolean;
};

declare type PageProps = {
  path: string;
  page: PageType;
  templateAnnotations?: TemplateAnnotationsType;
};
