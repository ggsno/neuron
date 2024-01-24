// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as d3 from "d3";
// import data from "../data.json";
import { useEffect, useRef, useState } from "react";
// import getStringWidthCount from "../utils/getStringWidthCount";

const _data = {
  nodes: [
    {
      id: "n1",
      group: "g1",
      content: "첫 번째 노드입니다.",
    },
    {
      id: "n2",
      group: "g2",
      content: "This is a second node.",
    },
  ],
  links: [
    {
      source: "n1",
      target: "n2",
    },
  ],
};

export default function TempNode() {
  const ref = useRef(null);
  const count = useRef(3);

  const [data, setData] = useState(_data);

  const createNode = () => {
    const nodes = [
      ...data.nodes,
      { id: `n${count.current}`, group: "g2", content: "새로운 노드" },
    ];
    const links = [
      ...data.links,
      { source: `n1`, target: `n${count.current++}` },
    ];

    setData({ nodes, links });
  };

  useEffect(() => {
    const getGraph = () => {
      // Specify the dimensions of the chart.
      const width = 928;
      const height = 680;

      // Specify the color scale.
      const color = d3.scaleOrdinal(["#D3E1FD", "#e5e7eb"]);

      // The force simulation mutates links and nodes, so create a copy
      // so that re-evaluating this cell produces the same result.
      const links = data.links.map((d) => ({ ...d }));
      const nodes = data.nodes.map((d) => ({ ...d }));

      // Create a simulation with several forces.
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3.forceLink(links).id((d) => d.id)
        )
        .force("charge", d3.forceManyBody().strength(-3000))
        .force("x", d3.forceX())
        .force("y", d3.forceY());

      // Create the SVG container.
      const svg = d3
        .create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", "max-width: 100%; height: auto;");

      // Add a line for each link, and a circle for each node.
      const link = svg
        .append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", Math.sqrt(2));

      const node = svg
        .append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 20)
        .attr("fill", (d) => color(d.group));

      const text = svg
        .append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr("font-size", "16px")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("style", "user-select: none")
        .text((d) => d.content);

      // Add a drag behavior.
      node.call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

      text.call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

      // Set the position attributes of links and nodes each time the simulation ticks.
      simulation.on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

        text.attr("x", (d) => d.x).attr("y", (d) => d.y);
      });

      // Reheat the simulation when drag starts, and fix the subject position.
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      // Update the subject (dragged node) position during drag.
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // Restore the target alpha so the simulation cools after dragging ends.
      // Unfix the subject position now that it’s no longer being dragged.
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      // When this cell is re-run, stop the previous simulation. (This doesn’t
      // really matter since the target alpha is zero and the simulation will
      // stop naturally, but it’s a good practice.)
      // invalidation.then(() => simulation.stop());

      return svg.node();
    };
    const graphNode = getGraph();
    ref.current.appendChild(graphNode);
    return () => ref.current.removeChild(ref.current.children[0]);
  }, [data]);
  return (
    <>
      <div ref={ref} />
      <button onClick={createNode}>create</button>
    </>
  );
}
