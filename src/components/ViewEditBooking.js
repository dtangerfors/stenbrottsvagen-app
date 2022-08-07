import React, { useState } from "react";
import Form from "./Form";

import ViewPersonalBookings from "./ViewPersonalBookings";

function ViewEditBooking(props) {
  const [currentBooking, setCurrentBooking] = useState(null);

  const refreshList = () => {
    setCurrentBooking(null);
  };

  const setActiveBooking = (booking) => {
    setCurrentBooking({
      key: booking.key,
      bookingName: booking.bookingName,
      bookingGuests: booking.bookingGuests,
      bookingArrival: booking.bookingArrival,
      bookingDeparture: booking.bookingDeparture,
      bookingMessage: booking.bookingMessage,
      rooms: booking.rooms,
      bookingUserID: booking.bookingUserID,
      updatedAt: booking.updatedAt,
      createdAt: booking.createdAt,
    });

    console.log(`Current bookingKey is: ${booking.key}`);
  };

  return (
    <section className="grid lg:grid-cols-2 min-w-full gap-8">
      <div>
        <div className="mb-12">
          <h2 className="text-title1 text-black-900 dark:text-white">Mina bokningar</h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Här visas alla dina kommande och tidigare bokningar
          </p>
        </div>
        <div className="flex flex-col">
          <ViewPersonalBookings
            userID={props.user.userData.uid}
            bookings={props.user.bookings}
            setActiveBooking={setActiveBooking}
          />
        </div>
      </div>
      <div className="flex justify-center">
        {currentBooking ? (
          <div className="p-8 bg-white sm:rounded-sm sm:shadow-xl">
            <Form booking={currentBooking} user={props.user} refreshList={refreshList} isBeingChanged={true} onBookingComplete={props.onBookingComplete}/>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ViewEditBooking;
