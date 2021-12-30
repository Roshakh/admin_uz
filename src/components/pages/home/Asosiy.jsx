import React from "react";
import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./asosiy.css";
import { Alldata } from "../../../dummydata";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

export default function Asosiy() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={Alldata}
        title="Daromad analizi"
        grid
        dataKey="All profits"
      />
      <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
      </div>
    </div>
  );
}
