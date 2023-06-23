import React from "react";

const navBar: React.FC = () => {

    const bienvenu: string = "Bienvenue";
    const presentation: string = "Présentation";
    const presentationSite = "Wwywthm"
    const presentationPerso = "Je me présente"
    const technique: string = "Parlons technique";
    const connaissance: string = "Faisons connaissance";
    const a1: string = "HTML / CSS / React";
    const a2: string = "App Web";
    const a3: string = "Base de données";
    const a4: string = "API REST";
    const a5: string = "Versionning";
    const a6: string = "Déploiement";
    const contact: string = "Contact";

    return (
        <nav>
            <ul>
                <li><a href="#welcom">{bienvenu}</a></li>
                <li className="deroulant"><a href="#presentation-site">{presentation}</a>
                    <ul className="sous">
                        <li><a href="#presentation-site">{presentationSite}</a></li>
                        <li><a href="#presentation-perso">{presentationPerso}</a></li>
                        <li><a href="#fake-users">{connaissance}</a></li>
                    </ul>
                </li>
                <li className="deroulant"><a href="#a1">{technique}</a>
                    <ul className="sous">
                        <li><a href="#a1">{a1}</a></li>
                        <li><a href="#a2">{a2}</a></li>
                        <li><a href="#a3">{a3}</a></li>
                        <li><a href="#a4">{a4}</a></li>
                        <li><a href="#a5">{a5}</a></li>
                        <li><a href="#a6">{a6}</a></li>
                    </ul>
                </li>
                <li><a href="#contact-form">{contact}</a></li>
            </ul>
        </nav>
    );
}

export default navBar;