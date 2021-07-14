import React, { useState, useEffect } from 'react'
import bookingDB from "../bookingDb";
import { TaskButton } from './buttons';

function ViewPersonalBookings(props) {
    const [bookings, setBookings] = useState([]);

    const onDataChange = (items) => {
      let bookings = [];
  
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();

        
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
        
        
      });
  
      setBookings(bookings);
    };
  
    useEffect(() => {
      bookingDB.getUserBookings(props.userID).on("value", onDataChange);
  
      return () => {
        bookingDB.getUserBookings(props.userID).off("value", onDataChange);
      };
    });
  
    return bookings.map((booking, index) => (
      <div  key={index} className="flex flex-wrap justify-between items-center rounded-sm shadow-lg p-8 my-4 bg-white">
      <div className="py-1">
      <p className="font-sans text-sm font-medium tracking-wider uppercase block text-secondary">Bokning för perioden</p>
      <p className="text-gray-700 text-base">{booking.bookingArrival} &mdash; {booking.bookingDeparture} | {booking.rooms.length} rum | {booking.bookingGuests} gäster</p>
      </div>
      <div className="flex">
        <TaskButton onClick={() => props.setActiveBooking(booking)} actionText={'Redigera Bokning'} icon={'pencil'} />
        <TaskButton onClick={() => bookingDB.remove(booking.key, props.userID)} actionText={'Radera Bokning'} icon={'delete-bin-6'} />
      </div>
    </div>
    ));
}

export default ViewPersonalBookings