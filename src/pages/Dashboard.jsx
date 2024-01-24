import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

import { Line } from 'react-chartjs-2';
import Timer from '../components/Timer/Timer';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
)

export const Dashboard = () => {
    const { t } = useTranslation();

    var [minerData, setMinerData] = useState({
        currentProgress: 90,
        dateEnds: '2024-01-22T23:00:00',
        hashingData: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ],
        temperatureData: [
            30, 35, 40, 45, 50, 55, 58, 59, 60, 55
        ],
        difficultyData: [
            2, 2.12, 3, 3, 2.5, 2.4, 2.2, 3
        ]
    })

    // var progressGraph = {
    //     labels: ['', '', '', '', '', '', ''],
    //     datasets: [{
    //         data: minerData.hashingData,
    //         backgroundColor: '#E34957',
    //         borderColor: '#bb4451',
    //         pointBorderColor: 'transparent',
    //         pointBorderWidth: 4,
    //         tension: 0.5,
    //         fill: true
    //     },
    //     {
    //         data: minerData.temperatureData,
    //         backgroundColor: 'transparent',
    //         borderColor: '#5ad097',
    //         pointBorderColor: 'transparent',
    //         pointBorderWidth: 4,
    //         tension: 0.5,
    //         fill: true
    //     }
    //     ]
    // }


    var progressGraph = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 20);
        gradient.addColorStop(0, 'rgba(250,174,50,1)');   
        gradient.addColorStop(1, 'rgba(250,174,50,0)');

        return {
            labels: ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
            datasets: [
                {
                    backgroundColor : gradient, // Put the gradient here as a fill color
                    borderColor : "#ff6c23",
                    borderWidth: 2,
                    pointColor : "#fff",
                    pointStrokeColor : "#ff6c23",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ff6c23",
                    data : [25.0,32.4,22.2,39.4,34.2,22.0,23.2,-24.1,20.0,-18.4,19.1,17.4]
                }
            ]
        }
    }

    var difficultyGraph = {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
            data: minerData.difficultyData,
            backgroundColor: 'transparent',
            borderColor: '#A038AA',
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
                        <div className="graph-label__title">{t('graph-label-temperature')}</div>
                        <div className="graph-label__value">{minerData.temperatureData.reduce((acc, val) => acc + val, 0) / minerData.temperatureData.length} ˙C</div>
                    </div>
                    <div className="graph-label">
                        <div className="graph-label__line" Style={"background-color: #58D299;"}></div>
                        <div className="graph-label__title">{t('graph-label-hashing')}</div>
                        <div className="graph-label__value">{minerData.hashingData.reduce((acc, val) => acc + val, 0) / minerData.hashingData.length} MH</div>
                    </div>
                </div>
                <Line data={progressGraph} options={options}></Line>
                <div className='graph-aside'>
                    <div className="graph-info">
                        <div className="graph-info__title">{t('graph-label-completed')}</div>
                        <div className="graph-info__value">{minerData.currentProgress} %</div>
                    </div>
                    <div className="graph-info">
                        <div className="graph-info__title">{t('graph-label-hashrate-rt')}</div>
                        <div className="graph-info__value">{minerData.hashingData[minerData.hashingData.length - 1]} mgh</div>
                    </div>
                    <div className="graph-info">
                        <div className="graph-info__title">{t('graph-label-timer')}</div>
                        <div className="graph-info__value"><Timer endDate={endDate} /></div>
                    </div>
                </div>
            </div>
            <section className="dashboard-section">
                <div className="dashboard-stats">
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/temperature-02.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__wrapper">
                            <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                            <div className="dashboard-stats__value">
                                58 ˙C
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/cpu-charge.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__wrapper">
                            <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                            <div className="dashboard-stats__value">
                                18
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/electricity.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__wrapper">
                            <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                            <div className="dashboard-stats__value">
                                <span className='green-text'>P</span> <span className='green-text'>N</span> B 10
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/slack.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__wrapper">
                            <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                            <div className="dashboard-stats__value">
                                L 2000 R 2000
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='graph'>
                <Line data={difficultyGraph} options={options}></Line>
                <div className='graph-aside'>
                    <div className="graph-info">
                        <div className="graph-info__title">{t('graph-label-difficulty')}</div>
                        <div className="graph-info__value">{minerData.difficultyData[minerData.difficultyData.length - 1]} ph</div>
                    </div>
                </div>
            </div>
        </>
    )
}
