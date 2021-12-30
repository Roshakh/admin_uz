import React from "react";
import "./client.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Client() {
  return (
    <div className="client">
      <div className="clientTitleContanier">
        <h1 className="clientTitle">Edit Client</h1>
        <Link to="/newClient">
        <button className="clientAddBotton">Create</button>
        </Link>
      </div>
      <div className="clientContainer">
        <div className="clientShow">
          <div className="clientShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
              alt=""
              className="showclientImg"
            />
            <div className="clientShowTopTittle">
              <span className="clientShowUserName">Jon Snow</span>
              <span className="clientshowUserTitle">SoftWare Enginerr</span>
            </div>
          </div>
          <div className="clientShowBottom">
            <span className="clientShowTitle">Account Details</span>
            <div className="clientShowInfo">
              <PermIdentity className="clientShowIcon" />
              <span className="clientShowInfoTitle">jon342</span>
            </div>
            <div className="clientShowInfo">
              <CalendarToday className="clientShowIcon" />
              <span className="clientShowInfoTitle">12.02.1992</span>
            </div>
            <span className="clientShowTitle">Contact Details</span>
            <div className="clientShowInfo">
              <PhoneAndroid className="clientShowIcon" />
              <span className="clientShowInfoTitle">+998 93 007 0809</span>
            </div>
            <div className="clientShowInfo">
              <MailOutline className="clientShowIcon" />
              <span className="clientShowInfoTitle">jon@mail.com</span>
            </div>
            <div className="clientShowInfo">
              <LocationSearching className="clientShowIcon" />
              <span className="clientShowInfoTitle">Tashkent | UZB</span>
            </div>
          </div>
        </div>
        <div className="clientUpdate">
          <span className="clientUpdateTitle">Edit</span>
          <form className="clientUpdateForm">
            <div className="clientUpdateLeft">
              <div className="clientUpdateItem">
                <label>Clientname</label>
                <input
                  type="text"
                  placeholder="job342"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jon Snow"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="jon@mail.com"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+998 93 007 0809"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="Tashkent | UZB"
                  className="clientUpdateInput"
                />
              </div>
            </div>
            <div className="clientUpdateRight">
              <div className="clientUpdateUpload">
                <img
                  className="clientUpdateImg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
                  alt=""
                />
                <label htmlFor="file"><Publish className="clientUpdateIcon"/></label>
                <input type="file"  id="file"  style={{display:"none"}}/>
              </div>
              <button className="clientUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
