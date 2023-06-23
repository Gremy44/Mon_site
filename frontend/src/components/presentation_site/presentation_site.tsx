import React from 'react';

const PresSite: React.FC = () => {

    const presentationSite: string = "Pourquoi Wwywthm";
    const contenuPresentationSite: string = "Contenu de la présentation à remplir"

    return (
        <div id="presentation-site">
            <h3>{presentationSite}</h3>
            <text className="pres">J'ai conçu le site Wwywthm comme un CV/vitrine technique. Il est pensé pour donner envi aux prochains recruteurs qui passeraient par ici d'avoir un apercu technique et personnel de la personne qui est derrière.
                <br /><strong>Wwywthm</strong> est l'acronyme (imprononçable) de <mark>"Why Would You Want To Hire Me"</mark> qui signifie "Pourquoi voudriez-vous m'embaucher".
                <br />Ce site est donc un moyen de me présenter et de montrer mes compétences techniques, de manière ludique et simple, pour casser un peu l'image de développeur junior qui va me suivre quelques années.
            </text>
        </div>
    );
}

export default PresSite;