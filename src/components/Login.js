import React from "react";
import { PrimaryButton } from "./buttons";

function Login(props) {
  return (
    <div className="bg-hero-bg bg-cover">
      <div className="w-screen h-screen flex justify-center items-center flex-col backdrop-filter backdrop-blur-sm px-8">
          <div className="rounded-sm shadow-xl p-12 bg-white text-center">
        <header className="mb-10">
          <h1 className="font-title font-semibold text-title1">Stenbrottsvägen 3</h1>
          <p className="text-base text-gray-700">Logga in för att boka och se information</p>
        </header>

        <PrimaryButton onClick={props.login} text={'Logga in med Google'} actionText={'Klicka här för att logga in till portalen genom Google'}/>
        </div>
      </div>
    </div>
  );
}

export default Login;
