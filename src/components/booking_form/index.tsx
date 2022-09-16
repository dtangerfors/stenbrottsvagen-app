import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { onValue } from "firebase/database";
import bookingDb from "../../firebase/bookingDb";
import { DevTool } from "@hookform/devtools";
import {
  Form,
  FormPart,
  Label,
  Input,
  Select,
  SubmitButton,
  CheckboxWrapper,
  CheckboxItem,
  HiddenInput,
  FormError,
} from "./form_items";

import rooms from "./rooms.json";
import { BookingData } from "./type";

const BookingForm = (props: any) => {
  const {isUpdatingBooking = false, bookingKey} = props.popupForm;
  const [booking, setBooking] = useState<any>({});
  const {register, handleSubmit, formState: { errors }, control, reset} = useForm<BookingData>();

  const onSubmit = handleSubmit((data) => {    
    isUpdatingBooking ? updateBooking(data) : createBooking(data);
  });

  useEffect(() => {
    if (isUpdatingBooking) {
      let data: BookingData;

      onValue(
        bookingDb.getBooking(props.userID, bookingKey),
        (snapshot) => {
          data = snapshot.val();

          // Convert rooms Array back to original values
          data.rooms.forEach((room:string, index:number, array:any[]) => {
            array[index] = `${room[0]},${room[1]}`
          })
          setBooking(data);
        }
      );
    }
  }, [bookingKey, isUpdatingBooking, props.userID]);

  useEffect(() => {
    if (isUpdatingBooking) {
      reset(booking);
    }
  }, [booking, isUpdatingBooking, reset]);

  const createBooking = (data: BookingData) => {
    // Set booking user ID
    data.bookingUserID = props.userID;

    // Add timestamp to booking
    data.createdAt = Date.now();
    data.updatedAt = Date.now();

    // Transform strings in rooms to array
    data.rooms.forEach((room, index, array) => {
      array[index] = room.split(",");
    });

    // Send booking to Firebase Database
    bookingDb.createBooking(data, props.userID);

    // Show notfication
    props.onBookingComplete({
      message: "Bokning inlagd",
      status: true,
    });

    props.closePopup();

    setTimeout(() => {
      props.onBookingComplete({
        message: "",
        status: false,
      });
    }, 3000);
  };

  const updateBooking = (data: BookingData) => {
    // Set booking user ID
    data.bookingUserID = props.userID;

    // Add timestamp to booking
    data.updatedAt = Date.now();

    // Transform strings in rooms to array
    data.rooms.forEach((room, index, array) => {
      array[index] = room.split(",");
    });

    // Send booking to Firebase Database
    bookingDb.updateBooking(bookingKey, data, props.userID)

    // Show notfication
    props.onBookingComplete({
      message: "Bokning uppdaterad",
      status: true,
    });

    props.closePopup();

    setTimeout(() => {
      props.onBookingComplete({
        message: "",
        status: false,
      });
    }, 3000);
  }

  const archiveBooking = () => {
    props.closePopup();
    props.archiveCurrentBooking({key: bookingKey, isArchiving: true})

  }

  return (
    <>
      <Form id="booking_form" name="bookingReservation" onSubmit={onSubmit}>
        <FormPart>
          <Label text="Person som bokar" htmlFor="bookingName" />
          <Input
            id="bookingName"
            type="text"
            placeholder="Namn"
            register={register("bookingName", { required: true })}
          />
          {errors.bookingName && (
            <FormError message="Vänligen fyll i för- och efternamn" />
          )}
        </FormPart>
        <FormPart>
          <Label text="Gäster" htmlFor="bookingGuests" />
          <Select
            name="bookingGuests"
            id="bookingGuests"
            register={register("bookingGuests")}
          >
            <option disabled>Antal Gäster</option>
            <option value="1">1 gäst</option>
            <option value="2">2 gäster</option>
            <option value="3">3 gäster</option>
            <option value="4">4 gäster</option>
            <option value="5">5 gäster</option>
            <option value="6">6 gäster</option>
            <option value="7">7 gäster</option>
            <option value="8">8 gäster</option>
            <option value="9">9 gäster</option>
            <option value="10">10 gäster</option>
          </Select>
        </FormPart>
        <FormPart>
          <Label htmlFor="bookingArrival" text="Ankomst" />
          <Input
            type="date"
            id="bookingArrival"
            placeholder="(åååå-mm-dd)"
            register={register("bookingArrival", { required: true })}
          />
          {errors.bookingArrival && (
            <FormError message="Vänligen välj ett datum" />
          )}
        </FormPart>
        <FormPart>
          <Label htmlFor="bookingDeparture" text="Avresa" />
          <Input
            type="date"
            id="bookingDeparture"
            placeholder="(åååå-mm-dd)"
            register={register("bookingDeparture", { required: true })}
          />
          {errors.bookingName && (
            <FormError message="Vänligen välj ett datum" />
          )}
        </FormPart>
        <FormPart>
          <Label htmlFor="bookingRooms" text="Rum/Stugor" />
          <CheckboxWrapper>
            {rooms.data.map((room, index) => {
              return (
                <CheckboxItem text={room.value} htmlFor={room.id} key={`checkbox-${index}`}>
                  <HiddenInput
                    defaultValue={`${room.id},${room.value}`}
                    id={room.id}
                    register={register("rooms")}
                  />
                </CheckboxItem>
              );
            })}
          </CheckboxWrapper>
        </FormPart>
        <FormPart>
          <Label htmlFor="bookingMessage" text="Eventuellt meddelande" />
          <Input
            type="text"
            id="bookingMessage"
            register={register("bookingMessage")}
            placeholder="Meddelande"
          />
        </FormPart>
        <FormPart>
          <div className="flex">
          <SubmitButton
            name="Submit"
            value={props.buttonText}
          />
          <button type="button" onClick={() => archiveBooking()} className="inline-block px-8 ml-4 text-default uppercase tracking-wide rounded-lg bg-gray-50 text-gray-500 cursor-pointer hover:bg-gray-100 transition-all"><span className="sr-only">Radera bokning</span> <i className="ri-delete-bin-6-fill"></i></button>
          </div>
        </FormPart>
      </Form>
    </>
  );
};

export default BookingForm;
