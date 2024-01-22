import React from 'react'

import { Line } from 'react-chartjs-2';
import Timer from '../components/Timer/Timer';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export const Dashboard = () => {
    const data = {
        labels: ["", "", "", ""],
        datasets: [{
            data: [8, 7.8, 6, 8],
            backgroundColor: 'transparent',
            borderColor: '#bb4451',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5,
            fill: true
        },
        {
            data: [1, 3, 4, 6],
            backgroundColor: 'transparent',
            borderColor: '#5ad097',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5,
            fill: true
        }
    ]
    }

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                min: 2,
                max: 10,
                ticks: {
                    display: false
                },
                grid: {
                    borderDash: [10],
                    display: false
                }
            }
        }
    }

    const endDate = new Date('2024-01-22T23:00:00');

    return (
        <>
            <div className='graph'>
                <div className="graph-labels">
                    <div className="graph-label">
                        <div className="graph-label__line" Style={"background-color: #E34957;"}></div>
                        <div className="graph-label__title">Temperature</div>
                        <div className="graph-label__value">65 ˙C</div>
                    </div>
                    <div className="graph-label">
                        <div className="graph-label__line" Style={"background-color: #58D299;"}></div>
                        <div className="graph-label__title">Hashing</div>
                        <div className="graph-label__value">41 MH</div>
                    </div>
                </div>
                <Line data={data} options={options}></Line>
                <div className='graph-aside'>
                    <div className="graph-info">
                        <div className="graph-info__title">Completed</div>
                        <div className="graph-info__value">30 %</div>
                    </div>
                    <div className="graph-info">
                        <div className="graph-info__title">Hashrate RT</div>
                        <div className="graph-info__value">20 mgh</div>
                    </div>
                    <div className="graph-info">
                        <div className="graph-info__title">Timer</div>
                        <div className="graph-info__value"><Timer endDate={endDate}/></div>
                    </div>
                </div>
            </div>
            <section className="dashboard-section">
                <div className="dashboard-stats">
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/temperature-02.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__title">Temperature</div>
                        <div className="dashboard-stats__value">
                            58 ˙C
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/cpu-charge.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__title">Chip</div>
                        <div className="dashboard-stats__value">
                            18
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/electricity.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__title">Error</div>
                        <div className="dashboard-stats__value">
                            B 10
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/slack.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__title">Temperature</div>
                        <div className="dashboard-stats__value">
                            L 2000 R 2000
                        </div>
                    </div>
                </div>
            </section>
            <div className='graph'>
                <Line data={data} options={options}></Line>
                <div className='graph-aside'>
                    <div className="graph-info">
                        <div className="graph-info__title">Current Difficulty</div>
                        <div className="graph-info__value">2.4524 ph</div>
                    </div>
                </div>
            </div>
        </>
    )
}
