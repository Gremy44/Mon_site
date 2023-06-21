import React from "react";

const ADeploiement: React.FC = () => {
    const stack: string = " - AWS - Heroku - AWS - Heroku";
    const argument: string = "";

    return (
      <div id="a6">
      <div className="argument">
      </div>
      <div className="wrapper">
        <div className="marqee">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
        <div className="marqee2">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
        <div className="marqee3">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
        <div className="marqee4">
          <span>{stack}</span>
          <span>{stack}</span>
        </div>
      </div>
    </div>
    );
  }


export default ADeploiement; 