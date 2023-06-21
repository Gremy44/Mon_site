import React from "react";

const navBar: React.FC = () => {

    const bienvenu: string = "Bienvenue";
    const a1: string = "HTML/CSS/React";
    const a2: string = "App Web";
    const a3: string = "Base de données";
    const a4: string = "API REST";
    const a5: string = "Versionning";
    const a6: string = "Déploiement";
    const contact: string = "Contact";

    return (
        <div id="nav">
            <ul>
                <li><a href="#welcom">{bienvenu}</a></li>
                <li><a href="#a1">{a1}</a></li>
                <li><a href="#a2">{a2}</a></li>
                <li><a href="#a3">{a3}</a></li>
                <li><a href="#a4">{a4}</a></li>
                <li><a href="#a5">{a5}</a></li>
                <li><a href="#a6">{a6}</a></li>
                <li><a href="#contact-form">{contact}</a></li>
            </ul>
        </div>
    );
}

export default navBar;