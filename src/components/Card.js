import React from "react";

function Paragraph(props) {
    return <p className="mb-6 flex-shrink-0 last:flex-shrink-1">{props.children}</p>
}

function SubLabel(props) {
    return <span className="font-sans text-sm font-medium tracking-wider uppercase block text-secondary">{props.children}</span>
}

function Label(props) {
    return <span className="text-gray-700 text-base">{props.children}</span>
}

function Card(props) {

  const booking = props.booking;
  const rooms = [];

  const getRoomName = () => {
    booking.rooms.forEach(room => {
      rooms.push(room[1]);
    });
  }

  getRoomName();

  return (
    <div className="grid grid-cols-6 flex-30 rounded-sm mb-7 shadow-xl p-8 bg-white">
      <div className="col-span-4">
      <Paragraph>
        <SubLabel>Bokning gjord av</SubLabel>
        <Label>{booking.bookingName}</Label>
      </Paragraph>
      </div>
      <div className="col-span-2">
        <Paragraph>
          <SubLabel>Antal gäster</SubLabel>
          <Label>{booking.bookingGuests}</Label>
        </Paragraph>
      </div>
      <div className="col-span-3">
        <Paragraph>
          <SubLabel>Incheckning</SubLabel>
          <Label>{booking.bookingArrival}</Label>
        </Paragraph>
      </div>
      <div className="col-span-3">
        <Paragraph>
          <SubLabel>Utcheckning</SubLabel>
          <Label>{booking.bookingDeparture}</Label>
        </Paragraph>
      </div>
      <div className="col-span-full">
        <Paragraph>
          <SubLabel>Rum/stugor vi kommer använda</SubLabel>
          <Label>{rooms.join(', ')}</Label>
        </Paragraph>
      </div>
      {booking.bookingMessage ? <div className="col-span-full">
        <Paragraph>
          <SubLabel>Meddelande</SubLabel>
          <Label>{booking.bookingMessage}</Label>
        </Paragraph>
      </div> : null}

    </div >
  );
}

export default Card;
