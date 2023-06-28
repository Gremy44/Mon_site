import React from 'react';
import profilPicture from './../..//static/images/pp.png';

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

const PresPerso: React.FC = () => {

    const presentationPersoTitle: string = "Je me présente";

    useEffect(() => {
        simpleFade("#pres-perso-title", 0.2, 1, 0,'0', 'none');
        fadeY("#pres-perso-text", 1, 1, 0, -100, -50, '-400', 'power4');
        popElement(".pp", 0.4, 1, 0, '-400')
      }, []);
    

    return (
        <div id="presentation-perso">
            <h3 id='pres-perso-title'>{presentationPersoTitle}</h3>
            <img className="pp" src={profilPicture} alt="Profil Picture" />
            <text id='pres-perso-text' className="pres">Je m'appelle Rémy Gosselin, j'ai 32 ans et je suis originaire de Nantes.
                <br />Sortant d'un cursus scolaire technique avec un BTS maintenance industrielle, je me suis ensuite dirigé vers l'infographie 3D qui est un domaine qui me passionne depuis toujours.
                <br />C'est suite à mon déménagement sur l'île de la Réunion que m'est venu l'envie de me former dans le domaine du développement.
                <br />J'ai toujours été intrigué par la programmation, mais ma curiosité a souvent été coupée par l'exigence technique de ce domaine.
                <br />C'est donc en 2022 que je décide de suivre une formation d'un an en ligne chez Open Classrooms pour me former au développement d'application web avec Python (langage qui est très utilisé dans les logiciels d'infographie 3D).
                <br />Mon grand calme, ma curiosité et mon acharnement, on était mes plus grandes qualités pour ne pas m'arracher les cheveux devant les innombrables bugs affrontés durant cette formation.
            </text>
        </div>
    );
}

export default PresPerso;