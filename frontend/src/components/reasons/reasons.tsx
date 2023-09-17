import React, { useState } from 'react';

import { useEffect, useRef } from "react";
import { simpleFade, fadeY, popElement } from "../../animations/myFadeAnimation"

interface Reason {
  title: string;
  reason: string;
}

const GiveReason: React.FC = () => {
  const [reasons, setReasons] = useState<Reason[]>([]);
  const [randomReason, setRandomReason] = useState<Reason | null>(null);

  const fetchReason = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reason/');
      const data: Reason[] = await response.json();
      setReasons(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getRandomReason = () => {
    if (reasons.length > 0) {
      const randomIndex = Math.floor(Math.random() * reasons.length);
      const selectedReason = reasons[randomIndex];
      setRandomReason(selectedReason);
    }
  };

  useEffect(() => {
    simpleFade("#reasons", 0.4, 0.5, 0.4, '0', 'none');
    fadeY("#reasons-desc", 0.5, 0.5, 0, -100, 0, '0', 'none');
    popElement("#reasons-btn", 0.4, 0.5, 0.2, '-500');
  }, []);

  useEffect(() => {
    // Affichez une raison aléatoire lorsque le tableau de raisons est mis à jour
    getRandomReason();
  }, [reasons]);
  return (
    <div className="reasons">
      <h3 id='reasons-desc'>Si vous doutez encore, demandez vous même à l'API</h3>
      {randomReason ? (
        <p>
          {randomReason.title} : <strong>{randomReason.reason}</strong>
        </p>
      ) : (
        <p>J'ai pleins d'arguments pour vous</p>
      )}
      <button id="reasons-btn" onClick={fetchReason}>Demander une bonne raison</button>
    </div>
  );
};

export default GiveReason;