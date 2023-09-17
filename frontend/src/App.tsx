import React, { useEffect } from "react";

import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import PresPerso from "./components/presentation_perso/presentation_perso";
import PresSite from "./components/presentation_site/presentation_site";
import AFront from "./components/arguments_content/afront";
import AAppWeb from "./components/arguments_content/aappweb";
import ADb from "./components/arguments_content/adb";
import AApiRest from "./components/arguments_content/aapirest";
import AVersionning from "./components/arguments_content/aversionning";
import ContactForm from "./components/contactform/contactform";
import ParentComponent from "./components/parent_fake_user/parent_fake_user";
import GiveReason from "./components/reasons/reasons";
import CV from "./components/cv/cv";

import './style/index.scss'

const App: React.FC = () => {

  const[imgValid, setImgValid] = React.useState([]);

  useEffect(() => {
    const scrollToWelcome = () => {
      const welcomeElement = document.getElementById('a1');
      if (welcomeElement) {
        welcomeElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToWelcome();
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <PresSite />
      <PresPerso />
      <ParentComponent />
      <AFront />
      <AAppWeb />
      <ADb />
      <AApiRest />
      <AVersionning />
      <GiveReason />
      <CV />
      <ContactForm />
    </div>
  );
}


export default App;