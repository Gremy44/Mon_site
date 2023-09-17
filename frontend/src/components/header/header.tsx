import React from "react";
import { useEffect, useRef } from "react";
import { simpleFade, fadeY } from "../../animations/myFadeAnimation"



function Header() {

  useEffect(() => {
    simpleFade("#title", 0.4, 1, 0,'0', 'none');
    fadeY("#desc", 1, 1, 0, -100, -50, '-250', 'power4');
  }, []);

  return (
    <div id="welcom">
      <p id="title">Bienvenu.</p>
      <p id="desc">Wwywthm est un site de démonstration pour vous faire changer d'avis sur le recrutement d'un junior back end un peu touche à tout.</p>
    </div>
  );
}

export default Header;