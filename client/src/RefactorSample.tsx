// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as d3 from "d3";

const Scale = ({ xDomain, xRagne, yDoamin, yRange, render }) => {
  const xScale = d3.scaleBand().domain(xDomain).range(xRagne).padding(0.5);

  const yScale = d3.scaleLinear().domain(yDoamin).range(yRange);

  const scale = {
    xScale,
    yScale,
  };

  return <>{render(scale)}</>;
};

const Bar = ({ d, xScale, yScale }) => {
  return (
    <rect
      className="bar"
      fill="steelblue"
      x={xScale(d.label)}
      y={yScale(d.value)}
      width={xScale.bandwidth()}
      height={150 - yScale(d.value)}
    />
  );
};

const BarChart = ({ data }) => {
  const xDomain = data.map((d) => d.label);
  const xRagne = [0, 400];
  const yDoamin = [0, 100];
  const yRange = [150, 0];

  return (
    <svg>
      xDomain && xRagne && yDoamin && yRange && (
      <Scale
        xDomain={xDomain}
        xRagne={xRagne}
        yDoamin={yDoamin}
        yRange={yRange}
        render={({ xScale, yScale }) => (
          <>
            {xScale && yScale && (
              <g>
                {data.map((d, i) => (
                  <Bar key={i} d={d} xScale={xScale} yScale={yScale} />
                ))}
              </g>
            )}
          </>
        )}
      />
      )
    </svg>
  );
};

export default function Temp() {
  const data = [
    { label: "A", value: 25 },
    { label: "B", value: 45 },
    { label: "C", value: 60 },
    { label: "D", value: 30 },
    { label: "E", value: 10 },
  ];

  return <BarChart data={data} />;
}
