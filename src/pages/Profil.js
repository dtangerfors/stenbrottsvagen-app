import React, {useState} from "react";
import { PrimaryButton } from "../components/buttons";
import ViewPersonalBookings from "../components/ViewPersonalBookings";

function Profil(props) {

  const [currentBooking, setCurrentBooking] = useState(null);

  const refreshList = () => {
    setCurrentBooking(null);
  };

  const setActiveBooking = (key) => {
    setCurrentBooking({
      key: key,
    });

    console.log(`Current bookingKey is: ${key}`);
  };

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
      <main className="grid py-20 pb-32 px-8 lg:px-20 bg-gray-100 flex-1 dark:bg-gray-900">
      <section className="grid lg:grid-cols-2 min-w-full gap-8">
      <div>
        <div className="mb-12">
          <h2 className="text-title1 text-black dark:text-white">Mina bokningar</h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Här visas alla dina kommande och tidigare bokningar
          </p>
        </div>
        <div className="flex flex-col">
          <ViewPersonalBookings
            userID={props.user.userData.uid}
            bookings={props.user.bookings}
            setActiveBooking={setActiveBooking}
            isUpdatingBooking={props.isUpdatingBooking}
          />
        </div>
      </div>
    </section>
      </main>
    </>
  );
}

export default Profil;
