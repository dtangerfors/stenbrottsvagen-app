import React, { useState, useEffect } from "react";
import { onValue } from "firebase/database";
import bookingDB from "../firebase/bookingDb";
import PersonalBookingCard from "./PersonalBookingCard";

function ViewPersonalBookings(props: any) {
  const [bookings, setBookings] = useState<any>([]);

  const onDataChange = (data: Object) => {
    const items = data;
    let bookingsArr = [];

    for (const bookingItem in items) {
        const bookingData: Object = items[bookingItem as keyof typeof items];
        bookingsArr.push({
          key: bookingItem,
          ...bookingData
        })
      }

    setBookings(bookingsArr);
  };

  useEffect(() => {
    onValue(bookingDB.getUserBookings(props.userID), (snapshot) => {
      const data = snapshot.val();
      onDataChange(data);
    });

    return () => {
      onValue(bookingDB.getUserBookings(props.userID), (snapshot) => {
        const data = snapshot.val();
        onDataChange(data);
      });
    };
  }, [props.userID]);

  return bookings.map((booking: any, index: number) => (
    <PersonalBookingCard key={index} booking={booking} isUpdatingBooking={props.isUpdatingBooking}/>
  ));
}

export default ViewPersonalBookings;
