import React from "react";
import LogoPostgreSQL from "../svg_comps/LogoPGS";
import LogoSQLite from "../svg_comps/LogoSQLite";
import LogoDjango from "../svg_comps/LogoDjango";

const ADb: React.FC = () => {
    const stack: string = " PostgreSQL - PGAdmin - SQLite - Système administrateur de base de données Django";
    const argument: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia quo soluta sit similique maiores laboriosam quibusdam et tempora facilis, minima consequatur praesentium quisquam cum commodi sint! Quae, ea alias.";

    return (
        <div id="a3">
            <h3>Base de données</h3>
            <div className="argument">
                <p>{argument}</p>
                <p>{argument}</p>
                <p>{argument}</p>
                <div className="badges">
                    <ul>
                        <li className="circle">
                            <p className="card">Postgre SQL</p>
                            <LogoPostgreSQL />
                        </li>
                        <li className="circle">
                            <p className="card">PG Admin</p>
                            <LogoPostgreSQL />
                        </li>
                        <li className="circle">
                            <p className="card">SQLite</p>
                            <LogoSQLite />
                        </li>
                        <li className="circle">
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