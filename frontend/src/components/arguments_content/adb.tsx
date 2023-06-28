import React from "react";
import LogoPostgreSQL from "../svg_comps/LogoPGS";
import LogoSQLite from "../svg_comps/LogoSQLite";
import LogoDjango from "../svg_comps/LogoDjango";
import Pouce from "../../static/images/ee_1.png";

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const ADb: React.FC = () => {
    const stack: string = " PostgreSQL - PGAdmin - SQLite - Système administrateur de base de données Django";
    const argument: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias.";

    useEffect(() => {
        simpleFade("#a3-title", 0.4, 0.5, 0.4, '0', 'none');
        fadeY("#a3-argument", 0.5, 0.5, 0, -100, 0, '0', 'none');
        popElement(".a3-circle", 0.4, 0.5, 0.2, '-250');
    }, []);

    return (
        <div id="a3">
            <h3 id="a3-title">Base de données</h3>
            <div className="argument" id="a3-argument">
                <p>{argument}</p>
                <p>{argument}</p>
                <p>{argument}</p>
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
                            <p className="card">Admin Django</p>
                            <LogoDjango />
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