import { Fragment } from "react";
import { useTextNode } from "./TextNode.hooks";
import TextNode from "./TextNode";
import AsyncBoundary from "./common/AsyncBoundary";

export default function TextNodeList() {
  return (
    <>
      <AsyncBoundary>
        <AsyncComponent />
      </AsyncBoundary>
    </>
  );
}

function AsyncComponent() {
  const { textNodes, createTextNode } = useTextNode();

  return (
    <>
      <button onClick={() => createTextNode("new")}>create</button>
      <svg width={"98vw"} height={"90vh"}>
        {textNodes.map((textNode, i) => {
          return (
            <Fragment key={textNode.id}>
              <TextNode
                content={textNode.content}
                posX={50 + 50 * i}
                posY={50 + 50 * i}
              />
            </Fragment>
          );
        })}
      </svg>
    </>
  );
}
