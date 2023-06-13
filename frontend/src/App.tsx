import React, {FunctionComponent, useState} from "react";
import Header from "./components/header/header";
import MyForm from "./components/fake_user/fakeuser";
import AFront from "./components/arguments_content/afront";
import AAppWeb from "./components/arguments_content/aappweb";
import ADb from "./components/arguments_content/adb";
import AApiRest from "./components/arguments_content/aapirest";
import AVersionning from "./components/arguments_content/aversionning";
import ADeploiement from "./components/arguments_content/adeploiement";
import UserTable from "./components/fake_user_table/fakeusertable";
import ContactForm from "./components/contactform/contactform";

function App() {
    return (
      <div>
        <Header />
        <MyForm />
        <UserTable />
        <AFront />
        <AAppWeb />
        <ADb />
        <AApiRest />
        <AVersionning />
        <ADeploiement />
        <ContactForm />
      </div>
    );
  }

export default App;