export type TextNode = {
  id: string;
  content: string;
};

export type NodeLink = {
  source: TextNode["id"];
  target: TextNode["id"];
};
