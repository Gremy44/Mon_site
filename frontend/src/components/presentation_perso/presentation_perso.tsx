import React from 'react';

const PresPerso: React.FC = () => {

    const presentationPerso: string = "Je me présente";
    const contenuPresentation: string = "Contenu de la présentation à remplir"

    return (
        <div id="presentation-perso">
            <h3>{presentationPerso}</h3>
            <p>{contenuPresentation}</p>
        </div>
    );
}

export default PresPerso;