import React from "react";

import twitterLogo from "./img/Twitter-logo.svg";
import avatar from "./img/avatar.png";
import "./Badge.css";

const headerLogoUrl =
  "https://raw.githubusercontent.com/Sparragus/platzi-badges/master/src/images/badge-header.svg";

function Badge(props) {
  const { firstName, lastName, jobTitle, twitter } = props;

  return (
    <div className="container myBadge">
      <div className="myBadge__header">
        <img src={headerLogoUrl} alt="header logo" />
      </div>
      <div className="myBadge__content">
        <div className="myBadge__content--name">
          <img src={avatar} alt="avatar" />
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>
        <div className="myBadge__content--info">
          <div className="myBadge__content--info__title">
            <h4>{jobTitle}</h4>
          </div>
          <div className="myBadge__content--info__twitter">
            <img src={twitterLogo} alt="Twitter logo" />
            <a href="https://twitter.com/Antonio__Estela">@{twitter}</a>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/900px-Flag_of_Colombia.svg.png"
              alt="Colombia flag"
              className="flag"
            />
          </div>
        </div>
      </div>
      <div className="myBadge__footer">
        <p>#PlatziConf</p>
      </div>
    </div>
  );
}

export default Badge;
