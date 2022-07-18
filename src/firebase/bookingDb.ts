import { ref, push, set, update, remove } from "firebase/database";
import { firebaseDB } from ".";

const getAllBookings = () => {
  return ref(firebaseDB, "/bookings");
};

const getUserBookings = (userID: string) => {
  return ref(firebaseDB, "/bookings/" + userID);
};

const getBooking = (userID: string, key: string) => {
  return ref(firebaseDB, `/bookings/${userID}/${key}`);
};

const createBooking = (data: Object, userID: string) => {
  console.log(data)
  const previousBookingsRef = ref(firebaseDB, '/bookings/' + userID);
  const newBookingsRef = push(previousBookingsRef);
  return set(newBookingsRef, {
      ...data
  });
};

const updateBooking = (key: string, data: Object, userID: string) => {
  const updatedBooking: any = {};
  updatedBooking[`/bookings/${userID}/${key}`] = data;
  return update(ref(firebaseDB), updatedBooking)
};

const removeBooking = (key: string, userID: string) => {
  return remove(ref(firebaseDB, `/bookings/${userID}/${key}`));
};

const bookingDb = {
  getBooking,
  getAllBookings,
  getUserBookings,
  createBooking,
  updateBooking,
  removeBooking,
};

export default bookingDb