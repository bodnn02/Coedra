import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Timer from "../components/Timer/Timer";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export const Dashboard = () => {
  const { t } = useTranslation();

  var [minerData, setMinerData] = useState({
    currentProgress: 90,
    dateEnds: "2024-01-25T23:00:00",
    graphData: [
      {
        temperature: 30,
        hashrate: 10,
        difficulty: 2.4565,
      },
      {
        temperature: 35,
        hashrate: 12,
        difficulty: 2.2,
      },
      {
        temperature: 32,
        hashrate: 11,
        difficulty: 1.5,
      },
      {
        temperature: 28,
        hashrate: 9,
        difficulty: 1,
      },
      {
        temperature: 33,
        hashrate: 10.5,
        difficulty: 1.1,
      },
      {
        temperature: 31,
        hashrate: 11.5,
        difficulty: 1.3,
      },
      {
        temperature: 34,
        hashrate: 12.5,
        difficulty: 1.5,
      },
      {
        temperature: 29,
        hashrate: 9.5,
        difficulty: 1.8,
      },
      {
        temperature: 36,
        hashrate: 13,
        difficulty: 2,
      },
      {
        temperature: 30.5,
        hashrate: 10.8,
        difficulty: 2.4565,
      },
    ],
  });

  const endDate = new Date("2024-01-24T23:00:00");

  const calculateAverage = (data, key) => {
    const sum = data.reduce((acc, val) => acc + val[key], 0);
    return sum / data.length;
  };

  return (
    <>
      <div className="graph">
        <div className="graph-labels">
          <div className="graph-label">
            <div
              className="graph-label__line"
              Style={"background-color: #E34957;"}
            ></div>
            <div className="graph-label__title">
              {t("graph-label-temperature")}
            </div>
            <div className="graph-label__value">
              {calculateAverage(minerData.graphData, "temperature")} ˙C
            </div>
          </div>
          <div className="graph-label">
            <div
              className="graph-label__line"
              Style={"background-color: #58D299;"}
            ></div>
            <div className="graph-label__title">{t("graph-label-hashing")}</div>
            <div className="graph-label__value">
              {calculateAverage(minerData.graphData, "hashrate")} MH
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart
            data={minerData.graphData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
            <defs>
                <linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E34957" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#E34957" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorHashrate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Tooltip content={<CustomTooltip1 />} />
            <Area
                type="monotone"
                dataKey="temperature"
                stroke="#E34957"
                fillOpacity={1}
                strokeWidth={2}
                fill="url(#colorTemperature)"
            />
            <Area
                type="monotone"
                dataKey="hashrate"
                stroke="#58D299"
                fillOpacity={1}
                strokeWidth={2}
                fill="url(#colorHashrate)"
            />
            </AreaChart>
        </ResponsiveContainer>
        <div className="graph-aside">
          <div className="graph-info">
            <div className="graph-info__title">
              {t("graph-label-completed")}
            </div>
            <div className="graph-info__value">
              {minerData.currentProgress} %
            </div>
          </div>
          <div className="graph-info">
            <div className="graph-info__title">
              {t("graph-label-hashrate-rt")}
            </div>
            <div className="graph-info__value">
              {minerData.graphData[minerData.graphData.length - 1].hashrate} mgh
            </div>
          </div>
          <div className="graph-info">
            <div className="graph-info__title">{t("graph-label-timer")}</div>
            <div className="graph-info__value">
              <Timer endDate={endDate} />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-stats">
        <div className="grid-wrapper">
          <div className="dashboard-stats__item">
            <div className="dashboard-stats__icon">
              <img src="images/temperature-02.svg" alt="" />
            </div>
            <div className="dashboard-stats__wrapper">
              <div className="dashboard-stats__title">
                {t("stats-temperature")}
              </div>
              <div className="dashboard-stats__value">58 ˙C</div>
            </div>
          </div>
          <div className="dashboard-stats__item">
            <div className="dashboard-stats__icon">
              <img src="images/cpu-charge.svg" alt="" />
            </div>
            <div className="dashboard-stats__wrapper">
              <div className="dashboard-stats__title">
              {t("stats-chip")}
              </div>
              <div className="dashboard-stats__value">18</div>
            </div>
          </div>
        </div>
        <div className="dashboard-stats__item">
          <div className="dashboard-stats__icon">
            <img src="images/electricity.svg" alt="" />
          </div>
          <div className="dashboard-stats__wrapper">
            <div className="dashboard-stats__title">
            {t("stats-error")}
            </div>
            <div className="dashboard-stats__value">
              <span className="green-text">P</span>{" "}
              <span className="green-text">N</span> B 10
            </div>
          </div>
        </div>
        <div className="dashboard-stats__item">
          <div className="dashboard-stats__icon">
            <img src="images/slack.svg" alt="" />
          </div>
          <div className="dashboard-stats__wrapper">
            <div className="dashboard-stats__title">
            {t("stats-fan")}
            </div>
            <div className="dashboard-stats__value">L 2000 R 2000</div>
          </div>
        </div>
      </div>
      <div className="graph">
        <div className="graph-labels">
          <div className="graph-label">
            <div className="graph-label__value">Current Difficulty</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart
            data={minerData.graphData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
            <defs>
                <linearGradient id="colorDifficulty" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A038AA" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#A038AA" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Tooltip content={<CustomTooltip2 />} />
            <Area
                type="monotone"
                dataKey="difficulty"
                stroke="#A038AA"
                fillOpacity={1}
                strokeWidth={2}
                fill="url(#colorDifficulty)"
            />
            </AreaChart>
        </ResponsiveContainer>
        <div className="graph-aside">
          <div className="graph-info">
            <div className="graph-info__title">
              {t("graph-label-difficulty")}
            </div>
            <div className="graph-info__value">
              {minerData.graphData[minerData.graphData.length - 1].difficulty}{" "}
              ph
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CustomTooltip1 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <>
        <div className="graph-tooltip">
          <div className="graph-tooltip__value">{payload[0].value}</div>
          <div className="graph-tooltip__name">˙C</div>
        </div>
        <div className="graph-tooltip">
          <div className="graph-tooltip__value">{payload[1].value}</div>
          <div className="graph-tooltip__name">mgh</div>
        </div>
      </>
    );
  }
};

const CustomTooltip2 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <>
        <div className="graph-tooltip">
          <div className="graph-tooltip__value">{payload[0].value}</div>
          <div className="graph-tooltip__name">ph</div>
        </div>
      </>
    );
  }
};
