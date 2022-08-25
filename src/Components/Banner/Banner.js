import React from "react";
import "./Banner.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ClassIcon from "@mui/icons-material/Class";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import feedpost from "../Images/feedpost1.jpg";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import SendIcon from "@mui/icons-material/Send";

function Banner() {
  return (
    <div className="home-page-cards">
      <div className="home-page-col-one">
        <div className="col-card-one-home">
          <div className="col-card-one-img1">
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className="col-card-one-img2">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="marvel-home-page-name">
            <h1>Marvel_louis</h1>
          </div>

          <div className="marvel-home-page-about">
            <p>Frontend Software Engineer(Web,Mobile)(Reactjs)</p>
          </div>
          <div
            style={{ marginTop: "10px", marginBottom: "10px" }}
            className="app-hr-line"
          ></div>
          <div className="profile">
            <div className="profile-one">
              <span style={{ fontSize: "13px", color: "grey" }}>
                Who Viewed your profile
              </span>
              <span style={{ color: "blue", fontSize: "10px" }}>40</span>
            </div>
            <div className="profile-two">
              <span style={{ fontSize: "13px", color: "grey" }}>
                Views of your profile
              </span>
              <span style={{ color: "blue", fontSize: "10px" }}>60</span>
            </div>
            <div
              style={{ marginTop: "15px", marginBottom: "10px" }}
              className="app-hr-line"
            ></div>
            <div className="exclusive-content-home">
              <p>Access exclusive tools & insights</p>
              <p style={{ marginTop: "-5px", float: "left" }}>
                <div style={{ marginRight: "5px" }}>
                  <ClassIcon style={{ color: "orange", fontSize: "14px" }} />
                </div>
                Try Premium free for 1month
              </p>
            </div>
            <div style={{ marginTop: "40px" }} className="app-hr-line"></div>
            <div className="exclusive-content-home">
              <p></p>
              <p style={{ float: "left" }}>
                <div style={{ marginRight: "5px" }}>
                  <BookmarkIcon />
                </div>
                My Items
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-col-two">
        <div
          className="new"
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            border: "1px solid rgba(128, 128, 128,0.274)",
          }}
        >
          <div className="second-col-search">
            <img src="https://picsum.photos/200/300" alt="" />
            <input type="text" placeholder="Start a post" />
          </div>
          <div className="page-icons">
            <ul>
              <li>
                <span>
                  <PhotoSizeSelectActualIcon style={{ color: "blue" }} />
                </span>
                Photo
              </li>
              <li>
                <span>
                  <SlideshowIcon style={{ color: "green" }} />
                </span>
                Video
              </li>
              <li>
                <span>
                  <EventIcon style={{ color: "brown" }} />
                </span>
                Event
              </li>
              <li>
                <span>
                  <ArticleIcon style={{ color: "orange" }} />
                </span>
                Write Article
              </li>
            </ul>
          </div>
        </div>
        <div className="postContainer">
          <div className="userpostdetails">
            <div className="userpostdetails-img">
              <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="userpostmaindetails">
              <span className="userdetailsnamepost">Joji Abraham</span>
              <span className="userdetailsnamepost-about">
                Marketing Executive
              </span>
              <span className="userdetailsnamepost-about">1d</span>
            </div>
          </div>
          <div className="mainfeedpost">
            <p>
              Watch Ankita Chaudhuri, SDM Gurugram, talk about the "Anaemia Mukt
              Mahilayein Parivar ko Bachayein” initiative, a collaboration
              between Deloitte India and the district administration of
              Gurugram, Haryana, and encourage women from Patli Hajipur, Taj
              Nagar, and Sultanpur to visit the camps along with their families
              and help make the village anaemia-free.
            </p>
            <img src={feedpost} alt="" />
            <div className="postAction">
              <ul>
                <li>
                  <ThumbUpOutlinedIcon style={{ paddingRight: "5px" }} /> Like
                </li>
                <li>
                  <CommentIcon style={{ paddingRight: "5px" }} /> Comment
                </li>
                <li>
                  <ReplyOutlinedIcon style={{ paddingRight: "5px" }} /> Share
                </li>
                <li>
                  <SendIcon style={{ paddingRight: "5px" }} /> Send
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="postContainer">
          <div className="userpostdetails">
            <div className="userpostdetails-img">
              <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="userpostmaindetails">
              <span className="userdetailsnamepost">Harsha Viji</span>
              <span className="userdetailsnamepost-about">Site Engineer</span>
              <span className="userdetailsnamepost-about">5d</span>
            </div>
          </div>
          <div className="mainfeedpost">
            <p>
              Watch Ankita Chaudhuri, SDM Gurugram, talk about the "Anaemia Mukt
              Mahilayein Parivar ko Bachayein” initiative, a collaboration
              between Deloitte India and the district administration of
              Gurugram, Haryana, and encourage women from Patli Hajipur, Taj
              Nagar, and Sultanpur to visit the camps along with their families
              and help make the village anaemia-free.
            </p>
            <img src={feedpost} alt="" />
            <div className="postAction">
              <ul>
                <li>
                  <ThumbUpOutlinedIcon style={{ paddingRight: "5px" }} /> Like
                </li>
                <li>
                  <CommentIcon style={{ paddingRight: "5px" }} /> Comment
                </li>
                <li>
                  <ReplyOutlinedIcon style={{ paddingRight: "5px" }} /> Share
                </li>
                <li>
                  <SendIcon style={{ paddingRight: "5px" }} /> Send
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="postContainer">
          <div className="userpostdetails">
            <div className="userpostdetails-img">
              <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="userpostmaindetails">
              <span className="userdetailsnamepost">Anju</span>
              <span className="userdetailsnamepost-about">Quality Analyst</span>
              <span className="userdetailsnamepost-about">3m</span>
            </div>
          </div>
          <div className="mainfeedpost">
            <p>
              Watch Ankita Chaudhuri, SDM Gurugram, talk about the "Anaemia Mukt
              Mahilayein Parivar ko Bachayein” initiative, a collaboration
              between Deloitte India and the district administration of
              Gurugram, Haryana, and encourage women from Patli Hajipur, Taj
              Nagar, and Sultanpur to visit the camps along with their families
              and help make the village anaemia-free.
            </p>
            <img src={feedpost} alt="" />
            <div className="postAction">
              <ul>
                <li>
                  <ThumbUpOutlinedIcon style={{ paddingRight: "5px" }} /> Like
                </li>
                <li>
                  <CommentIcon style={{ paddingRight: "5px" }} /> Comment
                </li>
                <li>
                  <ReplyOutlinedIcon style={{ paddingRight: "5px" }} /> Share
                </li>
                <li>
                  <SendIcon style={{ paddingRight: "5px" }} /> Send
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-col-three">
        <div className="homepage-header">
          <p>LinkedIn News</p>
          <ul>
            <li>Bouncing back from a layoff</li>
            <span style={{ color: "grey", fontSize: "13px" }}>
              1d ago 862 readers
            </span>
            <li>Infosys gives out lower bonuses</li>
            <span style={{ color: "grey", fontSize: "13px" }}>
              8h ago 567 readers
            </span>
            <li>McLaren announces india entry</li>
            <span style={{ color: "grey", fontSize: "13px" }}>
              3h ago 567 readers
            </span>
            <li>Whats's worth a pay cut</li>
            <span style={{ color: "grey", fontSize: "13px" }}>
              3h ago 567 readers
            </span>
            <li>Festive season spurs hiring</li>
            <span style={{ color: "grey", fontSize: "13px" }}>
              3h ago 567 readers
            </span>
            <li>Infosys gives out lower bonuses</li>
            <span style={{ color: "grey", fontSize: "13px" }}>
              3h ago 567 readers
            </span>
            <div
              style={{
                backgroundColor: "lightgrey",
                marginTop: "20px",
                width: "120px",
                height: "25px",
                textAlign: "center",
                borderRadius: "5px",
                fontWeight: "4y00",
                color: "grey",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Show more{" "}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
