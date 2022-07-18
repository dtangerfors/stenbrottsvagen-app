import React, {useEffect, useState} from "react";
import Overlay from "../Overlay";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "../booking_form";
import FormContent from "./popup_content.json"

const variants = {
  visible: { y: 0, x: "-50%", opacity: 1 },
  hidden: { y: 100, x: "-50%", opacity: 0 },
};

const Popup = (props) => {
  const {popupForm, user, onBookingComplete, closePopup} = props;
  const [popupData, setPopupData] = useState();

  useEffect(() => {
    if (popupForm.isUpdatingBooking) {
      setPopupData(FormContent.data.isUpdating)
    } else {
      setPopupData(FormContent.data.isNew)
    }
  })

  return (
    <AnimatePresence>
      {popupForm.isOpen && (
        <>
        <motion.div
          key="modal"
          variants={variants}
          transition={{ duration: 0.3, delay: 0 }}
          initial="hidden"
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          animate="visible"
          className="fixed w-full h-5/6 max-w-screen-sm bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-lg rounded-b-none z-50 overflow-y-scroll overflow-x-hidden"
        >
          <header className="sticky top-0 flex justify-between items-center w-full p-8 py-6 bg-white border-gray-200 border-b">
            <h2 className="font-title font-semibold text-heading text-black leading-none">
              {popupData.title}
            </h2>
            <button
              onClick={closePopup}
              className="relative flex items-center justify-center ml-4 text-base text-gray-400 leading-none w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-all ease-in-out duration-200"
            >
              <span className="sr-only">Stäng</span>
              <i className="ri-close-line"></i>
            </button>
          </header>
          <div className="w-full p-8 pb-safeBottom">
            <div className="pb-4 mb-8 border-gray-200 border-b">
              <p className="max-w-prose text-base text-gray-700">
                {popupData.message}
              </p>
            </div>
            <BookingForm key="booking-form" userID={user.userData.uid} onBookingComplete={onBookingComplete} popupForm={popupForm} closePopup={closePopup} buttonText={popupData.button}/>
          </div>
        </motion.div>
        <Overlay key="overlay" />
        </>
      )}
    </AnimatePresence>
  );
}

export default Popup