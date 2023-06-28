import React from 'react';

import { useEffect, useRef } from "react";
import { simpleFade, fadeY } from "../../animations/myFadeAnimation"

const PresSite: React.FC = () => {

    const presentationSite: string = "Pourquoi Wwywthm";

    useEffect(() => {
        simpleFade("#pres-site-title", 0.4, 1, 0,'0', 'none');
        fadeY("#pres-site-text", 1, 1, 0, -100, -50, '-250', 'power4');
      }, []);

    return (
        <div id="presentation-site">
            <h3 id="pres-site-title">{presentationSite}</h3>
            <text id='pres-site-text'className="pres">J'ai conçu le site Wwywthm comme un CV/vitrine technique. Il est pensé pour donner envi aux prochains recruteurs qui passeraient par ici d'avoir un apercu technique et personnel de la personne qui est derrière.
                <br /><strong>Wwywthm</strong> est l'acronyme (imprononçable) de <mark>"Why Would You Want To Hire Me"</mark> qui signifie "Pourquoi voudriez-vous m'embaucher".
                <br />Ce site est donc un moyen de me présenter et de montrer mes compétences techniques, de manière ludique et simple, pour casser un peu l'image de développeur junior qui va me suivre quelques années.
            </text>
        </div>
    );
}

export default PresSite;