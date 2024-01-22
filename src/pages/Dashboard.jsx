import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

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

    var progressGraph = {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
            data: minerData.hashingData,
            backgroundColor: 'transparent',
            borderColor: '#bb4451',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5,
            fill: true
        },
        {
            data: minerData.temperatureData,
            backgroundColor: 'transparent',
            borderColor: '#5ad097',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5,
            fill: true
        }
    ]
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
                        <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                        <div className="dashboard-stats__value">
                            58 ˙C
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/cpu-charge.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                        <div className="dashboard-stats__value">
                            18
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/electricity.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                        <div className="dashboard-stats__value">
                            B 10
                        </div>
                    </div>
                    <div className="dashboard-stats__item">
                        <div className="dashboard-stats__icon">
                            <img src="images/slack.svg" alt="" />
                        </div>
                        <div className="dashboard-stats__title">{t('nav-item-settings')}</div>
                        <div className="dashboard-stats__value">
                            L 2000 R 2000
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
