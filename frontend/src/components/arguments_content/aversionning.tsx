import React from "react";
import LogoGitHub from "../svg_comps/LogoGitHub";
import LogoStack from "../svg_comps/LogoStack";
import LogoGPT from "../svg_comps/LogoGPT";
import LogoCircleci from "../svg_comps/LogoCircleci";
import LogoSentry from "../svg_comps/LogoSentry";
import LogoDocker from "../svg_comps/LogoDocker";

import { useEffect } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const AVersionning: React.FC = () => {
  const stack: string = " - Github - Docker - Circleci - Sentry - ChatGPT ";

  useEffect(() => {
    simpleFade("#a5-title", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#a5-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a5-circle", 0.4, 0.5, 0.2, '-500');
  }, []);

  return (
    <div id="a5">
      <h3 id="a5-title">Versionning et divers</h3>
      <div className="argument" id="a5-argument">
        <p>
          Plus globalement ma formation a été locasion pour moi d'utiliser de nombreux outil tel que (pour les citer de manière non exaustive) : Github, Circle ci, Sentry, Docker
        </p>
        <hr />
        <p>
          Github m'a servis tout au long de la formation pour versionner mon code et le partager à mes formateurs. L'utiliser sur différents projets m'a permis de couvrir plusieurs de ses fonctionnalités.
        </p>
        <hr />
        <p>
          Sentry m'a servis pour journalisé plusieurs applications et ainsi pouvoir suivre les erreurs de mes applications et les corriger.
        </p>
        <hr />
        <p>
          Docker m'a permis de mettre en place des environnements de développement et de production pour mes applications. Les images que j'ai créée m'ont permis de déployer mes applications sur des serveurs de production.
        </p>
        <hr />
        <p>
          Circle ci m'a permis de mettre en place des pipelines de déploiement pour mes applications. Il a rendu possible d'utiliser de manière automatique les images docker que j'ai créée pour déployer mes applications sur des serveurs de production et donc d'entrevoir la mise en place de déploiement continu.
        </p>
        <hr />
        <p>
          Il y a encore beaucoup de technologies et d'outils que j'ai découvert durant ma formation mais que je ne cite pas ici. Autant en discuter en vrai durant un entretien.
        </p>
        <div className="badges">
          <ul>
            <li className="a5-circle">
              <p className="card">Github</p>
              <LogoGitHub />
            </li>
            <li className="a5-circle">
              <p className="card">Docker</p>
              <LogoDocker />
            </li>
            <li className="a5-circle">
              <p className="card">Circleci</p>
              <LogoCircleci />
            </li>
            <li className="a5-circle">
              <p className="card">Sentry</p>
              <LogoSentry />
            </li>
            <li className="a5-circle">
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