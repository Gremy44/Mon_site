import React from "react";
import LogoPython from "../svg_comps/LogoPython";
import LogoDjango from "../svg_comps/LogoDjango";
import LogoJinja from "../svg_comps/LogoJinja";

import { useEffect } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const AAppWeb: React.FC = () => {
  const stack: string = " - Python - Django - Python - Django";

  useEffect(() => {
    simpleFade("#a2-title", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#a2-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement(".a2-circle", 0.4, 0.5, 0.2, '-500');
  }, []);

  return (
    <div id="a2">
      <h3 id="a2-title">App Web</h3>
      <div className="argument" id="a2-argument">
        <p>Pendant ma formation, j'ai appris le développement d'applications web en utilisant le langage de programmation Python et le framework Django. Cette expérience m'a fait connaitre le développement web moderne et de la création d'applications robustes et performantes.</p>
        <hr />
        <p>L'un des points forts de ma formation a été ma plongée dans le cadre Django, un outil puissant qui simplifie considérablement le processus de développement web. Grâce à Django, j'ai acquis une solide compréhension des principes du modèle MVC (Modèle-Vue-Contrôleur) et de la conception orientée vers le framework. J'ai appris à structurer mes applications de manière logique et à maintenir un code propre et organisé.</p>
        <hr />
        <p>L'un des aspects les plus fascinants de Django est sa capacité à gérer efficacement la base de données. J'ai appris à modéliser des données, à créer des schémas de base de données, et à effectuer des opérations complexes sur les données en utilisant l'ORM (Object-Relational Mapping) de Django. Cela m'a permis de créer des applications capables de stocker et de récupérer des informations de manière efficace et sécurisée.</p>
        <hr />
        <p>Au fil de ma formation, j'ai également été initié à la création d'interfaces utilisateur conviviales en utilisant les fonctionnalités de rendu de templates de Django. J'ai appris à concevoir des pages web attrayantes en utilisant HTML, CSS et les puissants moteurs de templates de Django. Cela m'a permis de créer des sites web esthétiques et réactifs qui offrent une expérience utilisateur exceptionnelle.</p>
        <hr />
        <p>Un autre aspect passionnant de ma formation a été l'intégration de fonctionnalités avancées telles que l'authentification utilisateur, la gestion des sessions et la sécurisation des données. Django propose des outils intégrés pour gérer ces aspects essentiels de la sécurité web, et j'ai appris à les mettre en œuvre de manière efficace pour protéger les applications contre les menaces potentielles.</p>
        <hr />
        <p>En résumé, ma formation en développement d'applications web avec Python et Django a été une expérience enrichissante qui m'a permis d'acquérir des compétences essentielles pour créer des applications web de haute qualité. J'ai développé une compréhension solide des principes fondamentaux du développement web, de la gestion de la base de données à la création d'interfaces utilisateur attrayantes, en passant par la sécurité et l'optimisation des performances. Je suis impatient de mettre en pratique ces compétences dans des projets réels et de continuer à explorer les possibilités infinies offertes par le développement web avec Django.</p>
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