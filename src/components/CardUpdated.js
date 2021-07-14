import React from "react";

function Card(props) {

  const booking = props.booking;
  const rooms = [];

  const getRoomName = () => {
    booking.rooms.forEach(room => {
      rooms.push(room[1]);
    });
  }

  const bookedDates = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.toLocaleDateString('sv-SE', {
      day:'numeric'
    });
    const month = date.toLocaleDateString('sv-SE', {
      month: 'numeric'
    });

    return `${day}/${month}`
  }

  const showGuests = (guests) => {

    let word = 'gäster';

    if (guests <= 1) word = 'gäst';

    return <p className="text-gray-700 text-base"><i className="ri-user-3-line text-secondary text-base align-bottom"></i> {guests} {word}</p>
  }

  getRoomName();

  return (
    <div className="grid grid-cols-6 flex-30 rounded-sm mb-7 shadow-xl p-8 bg-white">
      <div className="col-span-4">
        <p className="text-black text-base font-medium">{booking.bookingName}</p>
        {booking.bookingMessage ? <p className="text-gray-700 text-headline">{booking.bookingMessage}</p> : null }
      </div>

      <div className="col-span-2 justify-self-end">
        <div className="bg-primaryLight text-base p-4 rounded-xl inline-block text-secondary">
          <span>{bookedDates(booking.bookingArrival)} - {bookedDates(booking.bookingDeparture)}</span>
        </div>
      </div>

      <div className="col-span-full mt-8">
        {showGuests(booking.bookingGuests)}
      </div>
      
      <div className="col-span-full mt-2">
        <p className="text-gray-700 text-base"><i className="ri-home-4-line text-secondary text-base align-bottom"></i> {rooms.join(', ')}</p>
      </div>
      

    </div >
  );
}

export default Card;
