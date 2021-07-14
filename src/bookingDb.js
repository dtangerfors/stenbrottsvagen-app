import firebase from './firebase';

const db = firebase.database();

const getAll = () => {
  return db.ref("/bookings");
};

const getUserBookings = (userID) => {
  return db.ref("/bookings/" + userID);
};

const create = (data, userID) => {
  return db.ref("/bookings/" + userID).push(data);
};

const update = (key, data, userID) => {
  return db.ref("/bookings/" + userID).child(key).update(data);
};

const remove = (key, userID) => {
  return db.ref("/bookings/" + userID).child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

const bookingDb = {
  getAll,
  getUserBookings,
  create,
  update,
  remove,
  removeAll,
};

export default bookingDb