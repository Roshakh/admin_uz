import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  Analytics,
  Equalizer,
  MonetizationOn,
  DriveEta,
  PersonOutline,
  CompareArrows,
  Report,
  Email,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Базовый
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Новости
            </li>
            <li className="sidebarListItem">
              <MonetizationOn className="sidebarIcon" />
              Квитанции 
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <DriveEta className="sidebarIcon" />
                Водители 
              </li>
            </Link>
            <Link to="clients" className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                Клиент
              </li>
            </Link>
            <li className="sidebarListItem">
              <CompareArrows className="sidebarIcon" />
              Переходы
            </li>
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Отчеты
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Уведомления </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Почта 
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Обратная связь
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Сообщения
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Штат сотрудников</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Базовый 
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Анализ
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Отчет
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
