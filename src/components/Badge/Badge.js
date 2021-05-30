import React from 'react';

import twitterLogo from './img/Twitter-logo.svg'
import avatar from './img/avatar.png'
import './Badge.css';

const headerLogoUrl = "https://raw.githubusercontent.com/Sparragus/platzi-badges/master/src/images/badge-header.svg"

function Badge () {
    return (
        <div className="badge">
            <div className="badge__header">
                <img src={headerLogoUrl} alt="header logo"/>
            </div>
            <div className="badge__content">
                <div className="badge__content--name">
                    <img src={avatar} alt="avatar" />
                    <h1>Antonio<br />Estela</h1>
                </div>
                <div className="badge__content--info">
                    <div className="badge__content--info__title">
                        <h4>Frontend developer</h4>
                    </div>
                    <div className="badge__content--info__twitter">
                        <img src={twitterLogo} alt="Twitter logo" />
                        <a href="https://twitter.com/Antonio__Estela">@Antonio__Estela</a>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/900px-Flag_of_Colombia.svg.png" alt="Colombia flag" className="flag"/>
                    </div>
                </div>
            </div>
            <div className="badge__footer">
                <p>#PlatziConf</p>
            </div>
        </div>
    );
}

export default Badge;