import { useEffect } from "react";
import TextNode from "./components/TextNode";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <svg className="w-screen h-screen">
        <TextNode content="즐겁다" />
      </svg>
    </>
  );
}

export default App;
