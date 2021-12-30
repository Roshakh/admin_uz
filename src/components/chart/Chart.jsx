import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart({title, data, dataKey, grid}) {
 
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active Daromadlar" stroke="green" />
          <Line type="monotone" dataKey="Haydovchilar oyligi" stroke="blue" />
          <Line type="monotone" dataKey="Past daromadlar" stroke="red" />
          <Tooltip/>
          {grid &&<CartesianGrid stroke="lightblue" strokeDasharray="5 5" />}
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
