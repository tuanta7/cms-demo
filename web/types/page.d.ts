declare type NodeType = {
  "@name": string;
  "@path": string;
  "@id": string;
  "@nodeType": string;
  "@nodes": Array<string>;
};

declare type PageType = NodeType & {};

declare type PageProps = {
  page: PageType;
};
