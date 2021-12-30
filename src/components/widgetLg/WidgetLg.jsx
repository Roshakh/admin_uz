import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {

const Button =({type})=> {
    return <button className={"widgetLgButton " + type }>{type}</button>
}

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">So'nggi inkassatsiyalar</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Tashkilot nomi</th>
          <th className="widgetLgTh">Qopcha raqami</th>
          <th className="widgetLgTh">Berilish kuni</th>
          <th className="widgetLgTh">Pul miqdori</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU"
              alt="imgUser"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nokia</span>
          </td>
          <td className="widgetLgCode">AD03048789</td>
          <td className="widgetLgData">15 Dekabr 2021</td>
          <td className="widgetLgAmount">$3502</td>
          <td className="widgetLgStatus"><Button type="Paid"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU"
              alt="imgUser"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Samsung</span>
          </td>
          <td className="widgetLgCode">AD03048789</td>
          <td className="widgetLgData">15 Dekabr 2021</td>
          <td className="widgetLgAmount">$3502</td>
          <td className="widgetLgStatus"><Button type="Unpaid"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU"
              alt="imgUser"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Apple</span>
          </td>
          <td className="widgetLgCode">AD03048789</td>
          <td className="widgetLgData">15 Dekabr 2021</td>
          <td className="widgetLgAmount">$3502</td>
          <td className="widgetLgStatus"><Button type="Waiting"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU"
              alt="imgUser"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Roison</span>
          </td>
          <td className="widgetLgCode">AD03048789</td>
          <td className="widgetLgData">15 Dekabr 2021</td>
          <td className="widgetLgAmount">$3502</td>
          <td className="widgetLgStatus"><Button type="Paid"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU"
              alt="imgUser"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Artel</span>
          </td>
          <td className="widgetLgCode">AD03048789</td>
          <td className="widgetLgData">15 Dekabr 2021</td>
          <td className="widgetLgAmount">$3502</td>
          <td className="widgetLgStatus"><Button type="Waiting"/></td>
        </tr>
      </table>
    </div>
  );
}
