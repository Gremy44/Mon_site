import React from "react";
import LogoDrf from "../svg_comps/LogoDrf";
import LogoPostman from "../svg_comps/LogoPostMan";
import LogoJson from "../svg_comps/LogoJson";

import { useEffect } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const AApiRest: React.FC = () => {
  const stack: string = "- Django REST Framework - Postman - Json";
  
  useEffect(() => {
    simpleFade("#a4-title", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#a4-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a4-circle", 0.4, 0.5, 0.2, '-500');
  }, []);
  
  return (
    <div id="a4">
      <h3 id="a4-title">API Rest</h3>
      <div className="argument" id="a4-argument">
        <p>
        La formation ma permise de découvrir les API REST (Representational State Transfer) en utilisant Django Rest Framework (DRF). Cette expérience ma apprise concevoir des interfaces de programmation robustes et performantes, ouvrant ainsi la porte à la création d'applications web modernes et interconnectées.
        </p>
        <hr />
        <p>
        Django Rest Framework m'a immédiatement captivé par sa simplicité et sa puissance. J'ai appris à concevoir des API RESTful de manière élégante, en utilisant des vues, des sérialiseurs et des routeurs pour exposer les fonctionnalités de manière cohérente et structurée. J'ai également acquis une compréhension profonde des principes REST, notamment la gestion des ressources et les méthodes HTTP.
        </p>
        <hr />
        <p>
        Grâce à DRF, j'ai été en mesure de créer des points de terminaison d'API flexibles et personnalisables, adaptés aux besoins spécifiques de chaque projet. J'ai également appris la gestion des autorisations, l'authentification pour garantir la sécurité des API.
        </p>
        <hr />
        <p>
        J'au aussi aprpis à tester des API, en créant des jeux de tests automatisés pour garantir la stabilité et la fiabilité des API que j'ai conçues.
        </p>
        <hr />
        <p>
        Allier DRF avec mes connaissances Django a été vraiment enrichissant et les deux se complètent et fonctionnent très bien ensemble. Ca a été un très bon levier et une bonne experience pour apprendre le fonctionnement des API REST ainsi que leur intégration dans une application web globale.
        </p>
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