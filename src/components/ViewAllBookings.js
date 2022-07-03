import React, { useState, useEffect } from "react";
import { onValue } from "firebase/database";
import bookingDB from "../bookingDb";
import Card from "./CardUpdated";

function ViewAllBookings(props) {
  const [bookings, setBookings] = useState([]);

  const onDataChange = (data) => {
    const users = data;
    let bookings = [];

    for (const userData in users) {
      const bookingData = users[userData];
      for (const data in bookingData) {
        bookings.push({
          key: data,
          ...bookingData[data]
        })
      }
    }
    setBookings(bookings);
  };

  useEffect(() => {
    onValue(bookingDB.getAllBookings(), (snapshot) => {
      const data = snapshot.val();
      onDataChange(data);
    });

    return () => {
      onValue(bookingDB.getAllBookings(), (snapshot) => {
        const data = snapshot.val();
        onDataChange(data);
      });
    };
  }, []);

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
