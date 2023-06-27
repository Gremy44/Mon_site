import React from "react";
import LogoGitHub from "../svg_comps/LogoGitHub";
import LogoStack from "../svg_comps/LogoStack";
import LogoGPT from "../svg_comps/LogoGPT";

const AVersionning: React.FC = () => {
  const stack: string = " - Github - Stack Overflow - ChatGPT ";
  const argument: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias.";

  return (
    <div id="a5">
      <h3>Versionning</h3>
      <div className="argument">
        <p>{argument}</p>
        <p>{argument}</p>
        <p>{argument}</p>
        <div className="badges">
          <ul>
            <li className="circle">
              <p className="card">Github</p>
              <LogoGitHub />
            </li>
            <li className="circle">
              <p className="card">Stack Over-flow</p>
              <LogoStack />
            </li>
              <li className="circle">
              <p className="card">Chat GPT</p>
            <LogoGPT />
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


export default AVersionning; 