import React from "react";
import LogoHtml from "../svg_comps/LogoHtml";
import LogoCss from "../svg_comps/LogoCss";
import LogoTs from "../svg_comps/LogoTs";
import LogoReact from "../svg_comps/LogoReact";
import LogoSass from "../svg_comps/LogoSass";

import { useEffect } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const AFront: React.FC = () => {
  const stack: string = " - HTML - CSS - React - TypeScript - SASS ";

  useEffect(() => {
    simpleFade("#a1-title", 0, 0.5, 0.4, '0', 'none');
    fadeY("#a1-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a1-circle", 0.4, 0.5, 0.2, '-500');
  }, []);

    return (
      <div id="a1">
        <h3 id="a1-title">Web</h3>
        <div className="argument" id="a1-argument">
          <p>
            Pendant ma formation, j'ai eu l'opportunité de me plonger dans le monde du développement web. Bien que la majeure partie de mon apprentissage ait été axée sur les technologies backend, j'ai également exploré avec enthousiasme le domaine du frontend, acquérant ainsi une base de compétences dans ce domaine.
          </p>
          <hr />
          <p>
            Mon voyage dans le développement frontend m'a permis d'utiliser des technologies et des outils essentiels, tels que HTML, CSS et JavaScript/TypeScript. J'ai appris à créer des interfaces utilisateur conviviales et esthétiques, en veillant à ce que chaque élément soit soigneusement conçu pour offrir une bonne expérience utilisateur.
          </p>
          <hr />
          <p>
            J'ai acquis une compréhension de la création de mises en page réactives et adaptées aux différents supports.
          </p>
          <hr />
          <p>
            En outre, j'ai exploré des bibliothèques et des frameworks frontend populaires tels que React et GreenSock JS, ce qui m'a permis de développer des applications interactives et dynamiques.
          </p>
          <hr />
          <p>
            Mon expérience dans le développement frontend ne se limite pas seulement à la création d'interfaces utilisateur. J'ai également acquis des compétences en optimisation des performances, en résolution de problèmes et en débogage, ce qui me permet de créer des applications frontend robustes et efficaces.
          </p>
          <hr />
          <p>
            Ainsi, bien que ma formation ait été principalement orientée vers le backend, je suis fier de mes compétences croissantes en frontend, qui complètent parfaitement mon ensemble de compétences de développeur web. Je suis enthousiaste à l'idée de continuer à explorer et à perfectionner mes compétences dans les deux domaines pour créer des solutions web complètes et de haute qualité.
          </p>
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
