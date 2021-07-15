import React, {useEffect} from 'react';
import { Doughnut }  from 'react-chartjs-2';
import './pieChart.css';
import { useState } from 'react'

function PieChart({title, data, range, domain, month}) {

    const [diaryChartData, setDiaryChartData] = useState({
        labels:[],
        datasets: [{
            data:[],
            backgroundColor: []
        }]
    });

    const handleHover = (evt, item, legend) => {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
        });
        legend.chart.update();
    };

    const chart = () => {

        console.log("data in chart" + data);

        setDiaryChartData({
            labels: domain,
            datasets: [{
                data: data,
                backgroundColor: range
            }]
        })
    };
//diaryChartData.datasets[0].data,
    useEffect(() => {
        chart();
    }, []);

    return (
        <div>
            {/*<h2 className="chart-title">{title}</h2>*/}
            <Doughnut
                data={diaryChartData}
                options={{
                    title: {
                        display: true,
                        text: {title}
                    },
                    plugins: {
                        legend: {
                            position: 'top'
                            // onHover: handleHover,
                            // onLeave: handleLeave
                        }
                    },
                    animation: {
                        animateScale: true
                    }
                }}
            >
            </Doughnut>
        </div>
    );
}

export default PieChart;
