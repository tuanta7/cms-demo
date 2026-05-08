declare type NodeType = {
  "@id"?: string;
  "@name": string;
  "@path": string;
  "@nodes"?: string[];
  "@nodeType": string;
  "mgnl:template"?: string;
  [key: string]: unknown;
};

declare type TemplateAnnotationsType = {
  [key: string]: string;
};
