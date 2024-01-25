import { Fragment } from "react";
import useTextNode from "./useTextNode";
import TextNode from "./TextNode";
import ApiBoundary from "./common/ApiBoundary";

export default function Canvas() {
  return (
    <>
      <ApiBoundary>
        <APIComponent />
      </ApiBoundary>
    </>
  );
}

function APIComponent() {
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
