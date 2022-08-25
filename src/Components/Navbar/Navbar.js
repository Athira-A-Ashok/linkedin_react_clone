import React from "react";
import logo from "../Images/logo.png";
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbarContentColOne">
          <div className="logo-container"></div>
          <img src={logo} alt="" />
          <div className="appSearchNavbar">
            <input type="text" placeholder="Search" />
            <div
              style={{ marginTop: "-28px", paddingLeft: "22px", color: "grey" }}
            >
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="navbarContentColTwo">
          <ul>
            <li>
              <div className="RouteIconTab">
                <HouseIcon />
              </div>
              <div className="RouteIconTabText">Home</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <PeopleIcon style={{ color: "grey" }} />
              </div>
              <div className="RouteIconTabText">My Network</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <WorkIcon style={{ color: "grey" }} />
              </div>
              <div className="RouteIconTabText">Jobs</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <CommentIcon style={{ color: "grey" }} />
              </div>
              <div className="RouteIconTabText">Messaging</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <NotificationsIcon style={{ color: "grey" }} />
              </div>
              <div className="RouteIconTabText">Notifications</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <div className="userIconCycle"></div>
              </div>
              <div className="RouteIconTabText">Me</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
