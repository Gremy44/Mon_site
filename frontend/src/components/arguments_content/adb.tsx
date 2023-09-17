import React from "react";
import LogoPostgreSQL from "../svg_comps/LogoPGS";
import LogoSQLite from "../svg_comps/LogoSQLite";
import Pouce from "../../static/images/ee_1.png";
import LogoSQL from "../svg_comps/LogoSQL";

import { useEffect } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const ADb: React.FC = () => {
    const stack: string = " PostgreSQL - PGAdmin - SQLite - SQL";

    useEffect(() => {
        simpleFade("#a3-title", 0.4, 0.5, 0.4, '0', 'none');
        fadeY("#a3-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
        popElement(".a3-circle", 0.4, 0.5, 0.2, '-500');
    }, []);

    return (
        <div id="a3">
            <h3 id="a3-title">Base de données</h3>
            <div className="argument" id="a3-argument">
                <p>
                    Ma formation ma permise d'apprendre les bases de données relationnelles, en me permettant d'utiliser des systèmes puissants et différents tel que SQLite ou PostgreSQL. Cette expérience a renforcé ma compréhension des fondamentaux de la gestion des données et a façonné ma capacité à créer des solutions de base de données robustes et performantes.
                </p>
                <hr />
                <p>
                    J'ai appris à concevoir des schémas de base de données, à créer des tables et à établir des relations entre les entités, le tout dans un environnement léger et autonome. La rapidité et l'efficacité de SQLite en ont fait un choix idéal pour les applications locales et mobiles, où la gestion des données doit être rapide et fluide.
                </p>
                <hr />
                <p>
                    Toutefois, ma formation ne s'est pas limitée à SQLite, et j'ai aussi vu PostgreSQL, un système de gestion de base de données relationnelle à part entière. PostgreSQL m'a ouvert les portes de la gestion de données à grande échelle. J'ai acquis une compréhension de la modélisation de données complexe et de la normalisation, assurant ainsi l'intégrité et la cohérence des données stockées.
                </p>
                <hr />
                <p>
                    En matière de sécurité des bases de données, j'ai acquis des compétences précieuses pour protéger les données sensibles. J'ai appris à mettre en œuvre des mécanismes d'authentification et d'autorisation, à gérer les privilèges d'accès et à crypter les données pour garantir leur confidentialité.
                </p>
                <hr />
                <p>Ce parcours ma permis d'apprendre à façonner ma capacité à concevoir, à mettre en œuvre et à maintenir des systèmes de gestion de données de qualité. </p>
                <div className="badges">
                    <ul>
                        <li className="a3-circle">
                            <p className="card">Postgre SQL</p>
                            <LogoPostgreSQL />
                        </li>
                        <li className="a3-circle">
                            <p className="card">PG Admin</p>
                            <img src={Pouce} alt="pouce en l'air" className="logo" />
                        </li>
                        <li className="a3-circle">
                            <p className="card">SQLite</p>
                            <LogoSQLite />
                        </li>
                        <li className="a3-circle">
                            <p className="card">SQL</p>
                            <LogoSQL />
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


export default ADb; 