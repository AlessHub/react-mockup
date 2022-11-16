import React from "react";
import Micro from '../img/microphone.svg'
import Albums from '../img/albums.svg'
import More from '../img/more.svg'
import Covers from '../img/covers.jpg'
import '../css/discoverpage/discoverpage.css'

function RegisterContent() {
  return (
    <>
      <div className="discWrapper">
        <div className="discContainer">
          <h1 className="discTitle">Discover new music</h1>
          <div className="discBtnContainer">
            <div className="discBtns">
              <img src={Micro} alt="Icon of a microphone" />
              <span className="whiteSpan">Charts</span>
            </div>
            <div className="discBtns">
              <img src={Albums} alt="Icon that represents more albums" />
              <span className="whiteSpan">Albums</span>
            </div>
            <div className="discBtns">
              <img src={More} alt="Icon that represents more" />
              <span className="whiteSpan">More</span>
            </div>
          </div>
          <p className="discParagraph">
            By joining you can benefit by listeninng to the latest albums
            released.
          </p>
        </div>
        <div className="discImgContainer">
          <img className="discImg" src={Covers} alt="Diverse covers" />
        </div>
      </div>
    </>
  );
}

export default RegisterContent;
