import React from "react";

function Card(props) {
  const booking = props.booking;

  const getRoomName = (rooms) => {
    if (!rooms) return "Inga rum valda";
    const roomArr = [];
    rooms.forEach((room) => {
      roomArr.push(room[1]);
    });

    return roomArr.join(", ");
  };

  const bookedDates = (arrivalStr, departureStr) => {
    const arrivalEvent = new Date(arrivalStr);
    const departureEvent = new Date(departureStr);
    let str = "Inget datum satt";

    const arrival = {
      weekday: arrivalEvent.toLocaleDateString("sv-SE", { weekday: "short" }),
      year: arrivalEvent.toLocaleDateString("sv-SE", { year: "numeric" }),
      month: arrivalEvent.toLocaleDateString("sv-SE", { month: "short" }),
      day: arrivalEvent.toLocaleDateString("sv-SE", { day: "numeric" }),
    };
    const departure = {
      weekday: departureEvent.toLocaleDateString("sv-SE", { weekday: "short" }),
      year: departureEvent.toLocaleDateString("sv-SE", { year: "numeric" }),
      month: departureEvent.toLocaleDateString("sv-SE", { month: "short" }),
      day: departureEvent.toLocaleDateString("sv-SE", { day: "numeric" }),
    };

    if (arrival.year === departure.year) {
      str = `${arrival.day} ${arrival.month} – ${departure.day} ${departure.month} ${departure.year}`;
    } else {
      str = `${arrival.day} ${arrival.month} ${arrival.year} – ${departure.day} ${departure.month} ${departure.year}`;
    }

    return str;
  };

  const showGuests = (guests) => {
    let word = "gäster";

    if (guests <= 1) word = "gäst";

    return `${guests} ${word}`;
  };

  return (
    <div className="grid grid-cols-12 flex-30 rounded-sm mb-7 shadow-xl p-8 bg-white dark:bg-black">
      <div className="col-span-6">
        <p className="text-black text-base font-medium dark:text-white">
          {booking.bookingName}
        </p>
      </div>

      <div className="col-span-6 justify-self-end">
        <div className="bg-primaryLight text-headline capitalize p-4 rounded-xl inline-block text-secondary dark:bg-secondary dark:text-primaryLight">
          <span>
            {bookedDates(booking.bookingArrival, booking.bookingDeparture)}
          </span>
        </div>
      </div>

      <div className="col-span-full mt-8">
        {booking.bookingMessage ? (
          <p className="text-gray-700 text-headline dark:text-gray-300">
            {booking.bookingMessage}
          </p>
        ) : null}
      </div>

      <div className="col-span-full mt-2">
        <ul className="flex flex-wrap">
          <li className="text-gray-700 text-base dark:text-gray-300 mr-6">
            <i className="ri-user-3-line text-secondary text-base align-bottom"></i>{" "}
            {showGuests(booking.bookingGuests)}
          </li>
          <li className="text-gray-700 text-base dark:text-gray-300">
            <i className="ri-home-4-line text-secondary text-base align-bottom"></i>{" "}
            {getRoomName(booking.rooms)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
