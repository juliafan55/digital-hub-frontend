import LeftLink from "./LeftLink";
import "./homeLeft.css";
import { left } from "../../../data/home";
import { Link } from "react-router-dom";
import { ArrowDown1 } from "../../../svg";
import { useState } from "react";

export default function HomeLeft({ user }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="left-home scrollbar">
      <Link to="/profile" className="left-link hover1">
      </Link>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
        />
      ))}
      {!visible && (
        <div
          className="left-link hover-pink"
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className="small-circle">
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className="more-left">
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink
              key={i}
              img={link.img}
              text={link.text}
              notification={link.notification}
            />
          ))}
          <div
            className="left-link hover-pink "
            onClick={() => {
              setVisible(false);
            }}
          >
            <div className="small-circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Show less</span>
          </div>
        </div>
      )}
      <div className="splitter"></div>
      {/* <div className="shortcut">
        <div className="heading">Your Shortcuts</div>
        <div className="edit-shortcut">Edit</div>
      </div> */}
      {/* <div className="shortcut-list"> */}
        {/* <Shortcut
          link="https://www.youtube.com/c/MohamedHaJJi1/featured"
          img="../../images/ytb.png"
          name="My Youtube channel"
        />

        <Shortcut
          link="https://www.instagram.com/med_hajji7/"
          img="../../images/insta.png"
          name="My Instagram "
        /> */}
      </div>
    // </div>
  );
}
