import TextNode from "./components/TextNode";

function App() {
  return (
    <>
      <svg className="w-screen h-screen">
        <TextNode content="test node" isSelected />
      </svg>
    </>
  );
}

export default App;
