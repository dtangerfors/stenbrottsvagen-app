import React, { useState, useEffect } from "react";
import { onValue } from "firebase/database";
import bookingDB from "../firebase/bookingDb";
import Card from "./CardUpdated";
import { onDataChange } from "../firebase/index";

function ViewAllBookings(props) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    onValue(bookingDB.getAllBookings(), (snapshot) => {
      const data = snapshot.val();
      onDataChange(data, setBookings);
    });

    return () => {
      onValue(bookingDB.getAllBookings(), (snapshot) => {
        const data = snapshot.val();
        onDataChange(data, setBookings);
      });
    };
  },[]);

  const sortedBookings = bookings.sort(function (a, b) {
    var dateA = new Date(a.bookingArrival),
      dateB = new Date(b.bookingArrival);
    return dateA - dateB;
  });

  const noFutureBookings = (booking) =>
    Date.parse(booking.bookingDeparture) <= Date.now();

  if (!bookings || bookings.every(noFutureBookings)) {
    return (
      <p className="text-base text-gray-700">
        Just nu finns inga bokningar inlagda
      </p>
    );
  } else {
    return sortedBookings
      .filter((booking) => Date.parse(booking.bookingDeparture) >= Date.now())
      .map((booking, index) => <Card key={index} booking={booking} />);
  }
}

export default ViewAllBookings;
