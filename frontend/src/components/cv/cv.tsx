import React from "react";
import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

import cvPDF from "../../static/pdf/cv_complet.pdf";


const CV: React.FC = () => {
  const handleDownload = () => {
    window.open(cvPDF, '_blank');
  };

  useEffect(() => {
    simpleFade("#cv-title", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#cv-desc", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement("#cv-btn", 0.4, 0.5, 0.2, '-500');
  }, []);

  return (
    <div id="cv">
      <h3 id="cv-title">Mon CV</h3>
      <p id="cv-desc" >Si mon profil vous intéresse, vous pouvez télécharger mon CV ici.</p>
      <button id="cv-btn" onClick={handleDownload}>Télécharger CV</button>
    </div>
  );
};

export default CV;