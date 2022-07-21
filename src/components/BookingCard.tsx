import React from "react";
import { BookingData } from "./booking_form/type";
import { TaskButton } from "./buttons";
import bookingDb from "../firebase/bookingDb";

const getRoomName = (rooms: any[]) => {
  if (!rooms) return "Inga rum valda";
  const roomArr: any[] = [];
  rooms.forEach((room) => {
    roomArr.push(room[1]);
  });

  return roomArr.join(", ");
};

const showDate = (timeStr: number) => {
  let date = new Date(timeStr);
  return date.toLocaleDateString("sv-SE");
};

const bookedDates = (arrivalStr: string, departureStr: string) => {
  const arrivalEvent = new Date(arrivalStr);
  const departureEvent = new Date(departureStr);
  let str = "Inget datum satt";

  const arrival = {
    weekday: arrivalEvent.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: arrivalEvent.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: arrivalEvent.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: arrivalEvent.toLocaleDateString("sv-SE", { day: "numeric" }),
  };
  const departure = {
    weekday: departureEvent.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: departureEvent.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: departureEvent.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: departureEvent.toLocaleDateString("sv-SE", { day: "numeric" }),
  };

  if (arrival.year === departure.year) {
    str = `${arrival.day}/${arrival.month} – ${departure.day}/${departure.month} ${departure.year}`;
  } else {
    str = `${arrival.day}/${arrival.month} ${arrival.year} – ${departure.day}/${departure.month} ${departure.year}`;
  }

  return str;
};

const showGuests = (guests: number) => {
  let word = "gäster";

  if (guests <= 1) word = "gäst";

  return `${guests} ${word}`;
};

const Card = (props: any) => {
  const booking: BookingData = props.booking;

  return (
    <div className="flex flex-col flex-30 mb-7 filter drop-shadow-xl">
      <div className="flex-1 rounded-t-sm p-6 md:p-8 bg-white dark:bg-black">
        <div className="flex justify-between w-full mb-4">
          <div className="w-1/2">
            <p className="text-black text-base font-medium leading-snug dark:text-white">
              <span className="block text-sm uppercase text-gray-400 font-medium leading-none pb-2">
                Bokning inlagd av
              </span>
              <span className="truncate">{booking.bookingName}</span>
            </p>
          </div>
          <div className="w-1/2 relative -right-6 md:-right-8 flex justify-end items-start">
            <div className="inline-block bg-primaryLight/50 text-headline capitalize p-2 pr-6 md:pr-8 rounded-l-xl border border-secondary/50 border-r-0 text-secondary dark:bg-secondary/20 dark:text-primaryLight dark:border-secondary/30">
              <span className="whitespace-nowrap">
                {bookedDates(booking.bookingArrival, booking.bookingDeparture)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full border-t border-gray-200 pt-4 pb-6 dark:border-gray-600">
          <div className="w-1/3">
            <span className="block text-sm uppercase text-gray-400 font-medium leading-none pb-2">
              Antal gäster
            </span>
            <p className="text-gray-700 text-headline dark:text-gray-300">
              {showGuests(booking.bookingGuests)}
            </p>
          </div>
          <div className="w-2/3">
            <span className="block text-sm uppercase text-gray-400 font-medium leading-none pb-2">
              Bokade rum
            </span>
            <p className="text-gray-700 text-headline dark:text-gray-300">
              {getRoomName(booking.rooms)}
            </p>
          </div>
        </div>
        <div className="w-full mt-auto">
          {booking.bookingMessage && (
            <>
              <span className="block border-t border-gray-200 text-sm uppercase text-gray-400 font-medium leading-none pt-4 pb-2 dark:border-gray-600">
                Meddelande
              </span>
              <p className="text-gray-700 text-headline dark:text-gray-300">
                {booking.bookingMessage}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="relative h-4 mx-4 bg-white dark:bg-black bg-dot bg-repeat-x bg-xs bg-center">
          <div className="absolute w-10 h-10 top-1/2 -left-4 transform -translate-y-1/2 -translate-x-1/2 rotate-45 border-transparent border-[8px] border-t-white border-r-white rounded-full dark:border-t-black dark:border-r-black"></div>
          <div className="absolute w-10 h-10 top-1/2 -right-14 transform -translate-y-1/2 -translate-x-1/2 -rotate-45 border-transparent border-[8px] border-t-white border-l-white rounded-full dark:border-t-black dark:border-l-black"></div>
      </div>
      <div className="flex items-center h-16 rounded-b-sm px-6 md:px-8 bg-white dark:bg-black">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm uppercase text-gray-400 font-medium leading-none">
          <i className="ri-history-line align-text-top"></i> {showDate(booking.createdAt)}
          </span>
          {
            props.userIsLoggedIn && <div className="flex">
            <TaskButton
          onClick={() => props.isUpdatingBooking(booking.key)}
          actionText={"Redigera"}
          icon={"pencil"}
        />
        <TaskButton
          onClick={() => bookingDb.removeBooking(booking.key, booking.bookingUserID)}
          actionText={"Radera"}
          icon={"delete-bin-6"}
        />
            </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Card;
