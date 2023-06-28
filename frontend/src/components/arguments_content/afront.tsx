import React from "react";
import LogoHtml from "../svg_comps/LogoHtml";
import LogoCss from "../svg_comps/LogoCss";
import LogoTs from "../svg_comps/LogoTs";
import LogoReact from "../svg_comps/LogoReact";
import LogoSass from "../svg_comps/LogoSass";

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"


const AFront: React.FC = () => {
  const stack: string = " - HTML - CSS - React - TypeScript - SCSS ";
  const contreArgument: string = "";
  const argument: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias.";

  useEffect(() => {
    simpleFade("#a1-title", 0, 0.5, 0.4, '0', 'none');
    fadeY("#a1-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a1-circle", 0.4, 0.5, 0.2, '-250');
  }, []);

  return (
    <div id="a1">
      <h3 id="a1-title">Web</h3>
      <div className="argument" id="a1-argument">
        <p>{argument}</p>
        <p>{argument}</p>
        <p>{argument}</p>
        <div className="badges">
          <ul>
            <li className="a1-circle">
              <p className="card">HTML</p>
              <LogoHtml />
            </li>
            <li className="a1-circle">
              <p className="card">CSS</p>
              <LogoCss />
            </li>
            <li className="a1-circle">
              <p className="card">React</p>
              <LogoReact />
            </li>
            <li className="a1-circle">
              <p className="card">Type Script</p>
              <LogoTs />
            </li>
            <li className="a1-circle">
            <p className="card">Sass</p>
              <LogoSass />
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


export default AFront; 
