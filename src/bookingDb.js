import { ref, remove } from "firebase/database";
import { firebaseDB } from "./firebase";

const getAllBookings = () => {
  return ref(firebaseDB, "/bookings");
};

const getUserBookings = (userID) => {
  return ref("/bookings/" + userID);
};

const createBooking = (data, userID) => {
  return ref("/bookings/" + userID).push(data);
};

const updateBooking = (key, data, userID) => {
  return ref("/bookings/" + userID).child(key).update(data);
};

const removeBooking = (key, userID) => {
  return ref("/bookings/" + userID).child(key).remove();
};

const removeAllBookings = () => {
  return remove();
};

const bookingDb = {
  getAllBookings,
  getUserBookings,
  createBooking,
  updateBooking,
  removeBooking,
  removeAllBookings,
};

export default bookingDb