import React from "react";
import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Active Users</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,450$</span>
            <span className="featuredMoneyRate">-11.5% <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">O'tgan oy bilan taqqoslash</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Active Drivers</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">1,250$</span>
            <span className="featuredMoneyRate">+7.6% <ArrowUpward className="featuredIcon"/>
            </span>
        </div>
        <span className="featuredSub">O'tgan oy bilan taqqoslash</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">InActive Users</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">3,150$</span>
            <span className="featuredMoneyRate">-8.7%<ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">O'tgan oy bilan taqqoslash</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">InActive Drivers</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">10.340$</span>
            <span className="featuredMoneyRate">+24.5% <ArrowUpward className="featuredIcon"/>
            </span>
        </div>
        <span className="featuredSub">O'tgan oy bilan taqqoslash</span>
      </div>
    </div>
  );
}
