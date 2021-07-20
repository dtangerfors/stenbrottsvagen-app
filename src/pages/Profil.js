import React from "react";
import { PrimaryButton } from "../components/buttons";
import ViewEditBooking from "../components/ViewEditBooking";

function Profil(props) {
  const lastSignInTime = new Date(
    props.user.userData.metadata.lastSignInTime
  ).toLocaleString("sv-SE", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <header className="flex flex-wrap justify-center px-8 lg:px-20 py-20 dark:bg-black">
        <div className="w-full h-80 lg:h-96 bg-cover-bg bg-cover bg-center rounded-3xl rounded-b-none"></div>
        {props.user ? (
            <>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 -mt-20 mb-4 rounded-full bg-cover bg-center border-4 border-white overflow-hidden flex-shrink-0 dark:border-black">
                  <img
                    src={props.user.userData.photoURL}
                    alt={props.user.userData.displayName}
                    className="w-full h-full object-cover relative"
                  />
                </div>
                <div className="flex-auto truncate text-center">
                  <h1 className="font-title font-semibold text-heading text-black truncate dark:text-white">
                    {props.user.userData.displayName}
                  </h1>
                  <p className="whitespace-normal text-sm text-gray-700 uppercase tracking-wider font-medium mb-8 dark:text-gray-300">
                    Inloggad sedan {lastSignInTime}
                  </p>
                  <PrimaryButton
                  onClick={props.logout}
                  text={"Logga ut"}
                  actionText={"Klicka här för att logga ut från portalen"}
                />
                </div>
              </div>
              
            </>
          ) : null}
      </header>
      <main className="grid py-20 pb-32 px-8 lg:px-20 bg-gray-100 justify-self-stretch dark:bg-gray-900">
        <ViewEditBooking
          user={props.user}
          onBookingComplete={props.onBookingComplete}
        />
      </main>
    </>
  );
}

export default Profil;
