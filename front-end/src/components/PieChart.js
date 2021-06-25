import React from 'react';
import * as d3 from 'd3';
import { useD3 } from "../hook/useD3";

function PieChart({title, data, range, domain, legendX, legendY}) {

    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 500;
            const margin = 40;

            const radius = Math.min(width, height) / 2 - margin;

            const color = d3.scaleOrdinal()
                .domain(domain)
                .range(range);

            const pie = d3.pie()
                .sort(null) // Do not sort group by size
                .value(function(d) {return d.value;});

            const data_ready = pie(data);

            console.log(data_ready);


            const arc = d3.arc()
                .innerRadius(radius * 0.5)         // This is the size of the donut hole
                .outerRadius(radius * 0.8);

            const legend = svg
                .append('g')
                .attr("transform", `translate(${100}, ${10})`);

            const g = svg
                .append('g')
                .attr("transform", `translate(${100}, ${40})`);

            g.selectAll('.cateArea')
                .data(data_ready)
                .join('path')
                .attr('class', 'cateArea')
                .attr('id', d => d.data.id)
                .attr('transform', `translate(150, 245)`)
                .attr('fill', function (d) {
                    return color(d.data.id)
                })
                .attr('d', arc)
                .attr('stroke', '#f1f1f1')
                .attr('stroke-width', '3px');

            for (let i = 0; i < range.length; i++) {
                legend.append('circle')
                    .attr("cx",legendX[i])
                    .attr("cy",legendY[i])
                    .attr("r", 8)
                    .style("fill", range[i]);
                legend.append("text")
                    .attr("x", legendX[i] + 10)
                    .attr("y", legendY[i])
                    .text(domain[i])
                    .style("font-size", "15px")
                    .attr("alignment-baseline","middle")
            }

        },
        [data.length]
    );

    return (
        <div>
            <h1>{title}</h1>
            <svg
                ref={ref}
                style={{
                    height: 500,
                    width: "100%",
                    marginRight: "0px",
                    marginLeft: "20%",
                }}
            >
            </svg>
        </div>
    );
}

export default PieChart;
