import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/sv"
import { onValue } from "firebase/database";
import bookingDB from "../../firebase/bookingDb";

import "./styles.css";
import Complete from "../Lottie.Searching";

moment.locale('sv', {
  week: {
      dow: 1,
  },
});

const localizer = momentLocalizer(moment);
const messages = {
  // new
  allDay: "Hela dagen",
  previous: "Föregående",
  next: "Nästa",
  today: "Idag",
  month: "Månad",
  week: "Vecka",
  day: "Dag",
  agenda: "Agenda",
  date: "Datum",
  time: "Tid",
  event: "Händelse",
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

const MonthEvent = ({ event }: any) => {

  return (
    <div className="relative">
      <div className="peer truncate">{event.title}</div>
      <div className="tooltip hidden absolute z-10 w-96 bg-white border border-gray-50 shadow-xl p-6 rounded-lg peer-hover:block dark:bg-black-900 dark:border-black-700">
        <span className="block border-b border-gray-200 py-1 dark:border-gray-700">
          {event.title}
        </span>
        <span className="block border-b border-gray-200 py-1 dark:border-gray-700">
          {bookedDates(event.start, event.end)}
        </span>
        <span className="block border-b border-gray-200 py-1 dark:border-gray-700">
          {event.guests} gäster,{" "}
          {event.rooms ? `${event.rooms.length} rum bokade` : "Inga rum valda"}
        </span>
      </div>
    </div>
  );
};

export default function BookingCalendar() {
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addBookingsToBookingState = (data: Object, callback: Function) => {
    const users = data;
    let bookings: any[] = [];
    let eventsArr: any[] = [];

    for (const userData in users) {
      const bookingData: Object = users[userData as keyof typeof users];
      for (const data in bookingData) {
        bookings.push({
          key: data,
          ...bookingData[data as keyof typeof bookingData],
        });
      }
    }

    bookings.forEach((booking) => {
      eventsArr.push({
        title: booking.bookingName,
        start: new Date(booking.bookingArrival),
        end: new Date(booking.bookingDeparture),
        guests: booking.bookingGuests,
        rooms: booking.rooms,
      });
    });

    callback(eventsArr);

    return setIsLoaded(true);
  };

  useEffect(() => {
    onValue(bookingDB.getAllBookings(), (snapshot) => {
      const data = snapshot.val();
      addBookingsToBookingState(data, setEvents);
    });

    return () => {
      onValue(bookingDB.getAllBookings(), (snapshot) => {
        const data = snapshot.val();
        addBookingsToBookingState(data, setEvents);
      });
    };
  }, []);

  const eventStyleGetter = (
    event: any,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    var backgroundColor = "#" + event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
    };
    return {
      style: style,
    };
  };

  return (
    <>
      {isLoaded ? (
        <Calendar
          localizer={localizer}
          views={["month"]}
          messages={messages}
          events={events}
          components={{
            event: MonthEvent,
          }}
          eventPropGetter={eventStyleGetter}
        />
      ) : (
        <div className="relative w-full grid place-items-center rounded-sm bg-white pb-8 h-[50rem]"> <Complete /></div>
      )}
    </>
  );
}
