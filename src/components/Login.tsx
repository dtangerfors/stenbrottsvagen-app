import React from "react";
import { PrimaryButton } from "./buttons";

export default function Login(props: any) {
  return (
    <div className="w-full h-screen grid grid-rows-3">
      <div className="bg-cover-bg bg-cover bg-center row-span-2"></div>
      <div className="bg-secondary px-8">
        <div className="relative max-w-screen-sm -mt-20 mx-auto rounded-sm p-12 bg-white text-center">
          <header className="mb-10">
            <h1 className="font-title font-semibold text-title1">
              Stenbrottsvägen 3
            </h1>
            <p className="text-base text-gray-700">
              Logga in för att boka och se information
            </p>
          </header>

          <PrimaryButton
            onClick={props.login}
            text={"Logga in med Google"}
            actionText={
              "Klicka här för att logga in till portalen"
            }
          />
        </div>
      </div>
    </div>
  );
}
