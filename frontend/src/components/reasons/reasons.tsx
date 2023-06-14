import React, { useState } from 'react';

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

  return (
    <div>
      <p>Si vous doutez encore, demandez vous même à l'api</p>
      {reasons.length > 0 ? (
        reasons.map((reason, index) => (
          <div key={index}>
            <p>{reason.title}: {reason.reason}</p>
          </div>
        ))
      ) : (
        <p>J'ai pleins d'arguments pour vous</p>
      )}
      <button onClick={fetchReason}>Demander une bonne raison</button>
    </div>
  );
};

export default GiveReason;
