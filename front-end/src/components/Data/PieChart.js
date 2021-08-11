import React, {useEffect} from 'react';
import { Doughnut }  from 'react-chartjs-2';
import './pieChart.css';
import { useState } from 'react'

function PieChart({title, data, range, domain}) {

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
