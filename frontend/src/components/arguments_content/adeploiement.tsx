import React from "react";
import LogoAWS from "../svg_comps/LogoAWS";
import LogoHeroku from "../svg_comps/LogoHeroku";

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const ADeploiement: React.FC = () => {
  const stack: string = " - AWS - Heroku - AWS - Heroku";
  const argument: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias.";

  useEffect(() => {
    simpleFade("#a6-title", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#a6-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a6-circle", 0.4, 0.5, 0.2, '-250');
  }, []);

  return (
    <div id="a6">
      <h3 id="a6-title">Déploiement</h3>
      <div className="argument" id="a6-argument">
        <p>{argument}</p>
        <p>{argument}</p>
        <p>{argument}</p>
        <div className="badges">
          <ul>
            <li className="a6-circle">
              <p className="card">AWS</p>
              <LogoAWS />
            </li>
            <li className="a6-circle">
            <p className="card">Heroku</p>
            <LogoHeroku />
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <div className="marqee">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
        <div className="marqee2">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
        <div className="marqee3">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
        <div className="marqee4">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
      </div>
    </div>
  );
}


export default ADeploiement; 