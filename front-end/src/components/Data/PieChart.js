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

    const chart = () => {
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
    }, [data]);

    return (
        <div>
            <h2 className="chart-title">{title}</h2>
            <div className="chart-area">
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
        </div>
    );
}

export default PieChart;
