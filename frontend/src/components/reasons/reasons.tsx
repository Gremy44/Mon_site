import React, { useState } from 'react';

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

interface Reason {
  title: string;
  reason: string;
}

const GiveReason: React.FC = () => {
  const [reasons, setReasons] = useState<Reason[]>([]);

  const fetchReason = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reason/');
      const data: Reason[] = await response.json();
      setReasons(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    simpleFade("#reasons", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#reasons-desc", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement("#reasons-btn", 0.4, 0.5, 0.2, '-500');
  }, []);

  return (
    <div className="reasons">
      <h3 id='reasons-desc'>Si vous doutez encore, demandez vous même à l'API</h3>
      {reasons.length > 0 ? (
        reasons.map((reason) => (
          <p>{reason.title} : <strong>{reason.reason}</strong></p>
        ))
      ) : (
        <p>J'ai pleins d'arguments pour vous</p>
      )}
      <button id="reasons-btn" onClick={fetchReason}>Demander une bonne raison</button>
    </div>
  );
};

export default GiveReason;
