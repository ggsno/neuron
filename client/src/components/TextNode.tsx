import getStringWidthCount from "../utils/getStringWidthCount";

export type TextNodeProps = {
  content?: string;
  isSelected?: boolean;
};

const CONTENT_MIN_WIDTH_THRESHOLD = 5;
const CONTENT_WIDTH_MULTIPLIER = 6;

export default function TextNode({
  content = "new node",
  isSelected = false,
}: TextNodeProps) {
  const contentWidth = getStringWidthCount(content);

  return (
    <>
      <ellipse
        rx={
          contentWidth < CONTENT_MIN_WIDTH_THRESHOLD
            ? CONTENT_MIN_WIDTH_THRESHOLD * CONTENT_WIDTH_MULTIPLIER
            : contentWidth * CONTENT_WIDTH_MULTIPLIER
        }
        ry={20}
        cx="50%"
        cy="50%"
        className={`${isSelected ? "fill-point" : "fill-gray-200"}`}
      />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="16"
        className={`font-mono ${
          isSelected ? "fill-snow-white" : "fill-gray-800"
        }`}
      >
        {content}
      </text>
    </>
  );
}
