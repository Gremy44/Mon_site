import React from 'react';

const PresSite: React.FC = () => {

    const presentationSite: string = "Pourquoi Wwywthm";
    const contenuPresentationSite: string = "Contenu de la présentation à remplir"

    return (
        <div id="presentation-site">
            <h3>{presentationSite}</h3>
            <p>{contenuPresentationSite}</p>
        </div>
    );
}

export default PresSite;