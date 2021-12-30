import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContanier">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddBotton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
              alt=""
              className="showUserImg"
            />
            <div className="userShowTopTittle">
              <span className="userShowUserName">Jon Snow</span>
              <span className="userShowUserTitle">SoftWare Enginerr</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">jon342</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">12.02.1992</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+998 93 007 0809</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">jon@mail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Tashkent | UZB</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="job342"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jon Snow"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="jon@mail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+998 93 007 0809"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="Tashkent | UZB"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
                  alt=""
                />
                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file"  id="file"  style={{display:"none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
