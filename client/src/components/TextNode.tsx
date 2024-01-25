export type TextNodeProps = {
  /**
   * svg상에 들어갈 Node의 중앙 좌표 값 x
   */
  posX: number | string;
  /**
   * svg상에 들어갈 Node의 중앙 좌표 값 y
   */
  posY: number | string;
  content?: string;
  isSelected?: boolean;
};

export default function TextNode({
  posX,
  posY,
  content = "new node",
  isSelected = false,
}: TextNodeProps) {
  return (
    <>
      <circle
        r={20}
        cx={posX}
        cy={posY}
        className={`${isSelected ? "fill-[#D3E1FD]" : "fill-gray-200"}`}
      />
      <text
        x={posX}
        y={posY}
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        className={`font-mono ${
          isSelected ? "fill-black font-bold" : "fill-gray-800"
        }`}
      >
        {content}
      </text>
    </>
  );
}
