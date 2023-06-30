import React from "react";
import LogoPython from "../svg_comps/LogoPython";
import LogoDjango from "../svg_comps/LogoDjango";
import LogoJinja from "../svg_comps/LogoJinja";

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const AAppWeb: React.FC = () => {
  const stack: string = " - Python - Django - Python - Django";
  const argument: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias.";

  useEffect(() => {
    simpleFade("#a2-title", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#a2-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a2-circle", 0.4, 0.5, 0.2, '-500');
  }, []);

  return (
    <div id="a2">
      <h3 id="a2-title">App Web</h3>
      <div className="argument" id="a2-argument">
        <p>{argument}</p>
        <p>{argument}</p>
        <p>{argument}</p>
        <div className="badges">
          <ul>
            <li className="a2-circle">
              <p className="card">Python</p>
              <LogoPython />
            </li>
            <li className="a2-circle">
              <p className="card">Django</p>
              <LogoDjango />
            </li>
            <li className="a2-circle">
              <p className="card">Jinja</p>
              <LogoJinja />
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


export default AAppWeb; 