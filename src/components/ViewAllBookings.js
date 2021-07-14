import React, { useState, useEffect } from 'react'
import bookingDB from "../bookingDb";
import Card from "./CardUpdated";

function ViewAllBookings(props) {
    const [bookings, setBookings] = useState([]);

    const onDataChange = (users) => {
      let bookings = [];
  
      users.forEach((user) => {
        user.forEach((bookingItem) => {
          let key = bookingItem.key;
          let data = bookingItem.val();
          bookings.push({
            key: key,
            bookingName: data.bookingName,
            bookingGuests: data.bookingGuests,
            bookingArrival: data.bookingArrival,
            bookingDeparture: data.bookingDeparture,
            bookingMessage: data.bookingMessage,
            rooms: data.rooms,
            bookingUserID: data.bookingUserID,
          });
        })
        
      });
  
      setBookings(bookings);
    };
  
    useEffect(() => {
      bookingDB.getAll().on("value", onDataChange);
  
      return () => {
        bookingDB.getAll().off("value", onDataChange);
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
      return <p className="text-base text-gray-700">Just nu finns inga bokningar inlagda</p>;
    } else {
      return sortedBookings.map((booking, index) => (
        <Card key={index} booking={booking} />
      ));
    }

    
}

export default ViewAllBookings