import React from "react";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import PresPerso from "./components/presentation_perso/presentation_perso";
import PresSite from "./components/presentation_site/presentation_site";
import AFront from "./components/arguments_content/afront";
import AAppWeb from "./components/arguments_content/aappweb";
import ADb from "./components/arguments_content/adb";
import AApiRest from "./components/arguments_content/aapirest";
import AVersionning from "./components/arguments_content/aversionning";
import ADeploiement from "./components/arguments_content/adeploiement";
import ContactForm from "./components/contactform/contactform";
import ParentComponent from "./components/parent_fake_user/parent_fake_user";
import GiveReason from "./components/reasons/reasons";

import './style/index.scss'

function App() {
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
        <ADeploiement />
        <GiveReason />
        <ContactForm />
      </div>
    );
  }

export default App;