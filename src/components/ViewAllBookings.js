import React, { useState, useEffect, useContext } from "react";
import { onValue } from "firebase/database";
import bookingDB from "../firebase/bookingDb";
import Card from "./BookingCard";
import { onDataChange } from "../firebase/index";
import { UserContext } from "../user-context";

function ViewAllBookings(props) {
  const [bookings, setBookings] = useState([]);
  const loggedInUser = useContext(UserContext);

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
      .map((booking, index) => {
        let isLoggedIn = loggedInUser.uid === booking.bookingUserID ? true : false;
      return (<Card userIsLoggedIn={isLoggedIn} key={index} booking={booking} isUpdatingBooking={props.isUpdatingBooking} />)
    });
  }
}

export default ViewAllBookings;
