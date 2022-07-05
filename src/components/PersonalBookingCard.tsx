import React from "react";
import bookingDb from "../firebase/bookingDb";
import { TaskButton } from "./buttons";

const PersonalBookingCard = (props: any) => {
   const {key, bookingArrival, bookingDeparture, rooms, bookingGuests, bookingUserID } = props.booking;

   return (
      <div
      className="flex flex-wrap justify-between items-center rounded-sm shadow-lg p-8 my-4 bg-white"
    >
      <div className="py-1">
        <p className="font-sans text-sm font-medium tracking-wider uppercase block text-secondary">
          Bokning för perioden
        </p>
        <p className="text-gray-700 text-base">
          {bookingArrival} &mdash; {bookingDeparture} | {rooms.length} rum |{" "}
          {bookingGuests} gäster
        </p>
      </div>
      <div className="flex">
        <TaskButton
          onClick={() => props.setActiveBooking(props.booking)}
          actionText={"Redigera Bokning"}
          icon={"pencil"}
        />
        <TaskButton
          onClick={() => bookingDb.removeBooking(key, bookingUserID)}
          actionText={"Radera Bokning"}
          icon={"delete-bin-6"}
        />
      </div>
    </div>
   )
}

export default PersonalBookingCard