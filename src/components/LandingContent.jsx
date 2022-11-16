import React from "react";
import LandingPageGirl from '../img/landing-page-girl.png'
import { Link } from "react-router-dom";
import '../css/landingpage/landingpage.css'

function MainContent() {
  return (
    <>
      <div>
        <img
          className="landingImg"
          src={LandingPageGirl}
          alt="Girl feeling the music"
        />
      </div>
      <div className="landingTextContainer">
        <h1 className="landingText">Feel The Music</h1>
        <p className="landingParagraph">
          Stream over 20 thousand songs with one click
        </p>
        <Link to="/Register">
          <button className="landingBtn">Join Now</button>
        </Link>
      </div>
    </>
  );
}

export default MainContent;
