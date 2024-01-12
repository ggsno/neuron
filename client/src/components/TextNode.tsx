export default function TextNode({ content }: { content: string }) {
  return (
    <>
      <ellipse rx={40} ry={20} className="fill-point" cx="50%" cy="50%" />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="16"
      >
        {content}
      </text>
    </>
  );
}
