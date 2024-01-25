import { Fragment } from "react";
import TextNode from "./components/TextNode";
import useTextNode from "./components/useTextNode";

function App() {
  const { textNodes, isLoading, createTextNode } = useTextNode();

  return (
    <>
      <button onClick={() => createTextNode("new")}>create</button>
      <svg width={"98vw"} height={"90vh"}>
        {!isLoading
          ? "not yet"
          : textNodes?.map((textNode, i) => {
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

export default App;
