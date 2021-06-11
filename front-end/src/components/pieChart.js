import React from 'react';
import * as d3 from 'd3';
import { useD3 } from "../hook/useD3";

function BarChart({data}) {
    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 500;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };
            var radius = Math.min(width, height) / 2 - margin;

            const pie = d3.pie().sort(null).value(d => d.value);
            const arcData = pie(data);

            const arcHole = d3.arc()
                .innerRadius(radius * 0.5)
                .outerRadius(radius * 0.8);
            const arc = d3.arc()
                .outerRadius(radius * 0.9)
                .innerRadius(radius * 0.9);

            const color = d3.scaleOrdinal()
                .domain(["happy", "sad", "peaceful", "angry"])
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);

            svg
                .selectAll('.plot-area')
                .data(arcData)
                .join('path')
                .attr('class', 'ringArea')
                .attr('d', arc)
                .style('fill', function (d) {
                    color(d.id);
                })
                .attr("stroke", "white")
                .style("stroke-width", "2px")
        },
        [data.length]
    );

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: "100%",
                marginRight: "0px",
                marginLeft: "0px",
            }}
        >
            <g className="plot-area" />
        </svg>
    );
}

export default BarChart;
