import React from "react";
import LogoDrf from "../svg_comps/LogoDrf";
import LogoPostman from "../svg_comps/LogoPostMan";
import LogoJson from "../svg_comps/LogoJson";

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const AApiRest: React.FC = () => {
  const stack: string = "- Django REST Framework - Postman - Json";
  const argument: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias.";
  
  useEffect(() => {
    simpleFade("#a4-title", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#a4-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a4-circle", 0.4, 0.5, 0.2, '-500');
  }, []);
  
  return (
    <div id="a4">
      <h3 id="a4-title">API Rest</h3>
      <div className="argument" id="a4-argument">
        <p>{argument}</p>
        <p>{argument}</p>
        <p>{argument}</p>
        <div className="badges">
          <ul>
            <li className="a4-circle">
              <p className="card">DRF</p>
              <LogoDrf />
            </li>
            <li className="a4-circle">
              <p className="card">Postman</p>
              <LogoPostman />
            </li>
              <li className="a4-circle">
              <p className="card">Json</p>
            <LogoJson />
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


export default AApiRest; 