import React from "react";
import { NavLink } from "react-router-dom";

function NavPill(props) {
  return (
    <NavLink
      exact
      to={props.to}
      className="flex text-base mr-12 leading-10 py-8 text-gray-400 text-center hover:text-black transition-all ease-in-out duration-200 dark:hover:text-white"
      activeClassName="text-primary dark:text-secondary"
    >
      {props.children}
    </NavLink>
  );
}

export default function DesktopHeader({ openPopup }) {
  return (
    <div className="bg-white dark:bg-black px-8 lg:px-20">
      <div className="max-w-screen-xl flex items-center mx-auto">
        <NavLink
          to="/"
          className="font-sans text-title2 font-bold text-primary dark:text-secondary"
        >
          S3
        </NavLink>

        <nav className="relative ml-8 flex">
          <NavPill to="/">
            <i className="ri-home-line text-headline mr-2"></i>Hem
          </NavPill>
          <NavPill to="/galleri">
            <i className="ri-gallery-line text-headline mr-2"></i>Galleri
          </NavPill>

          <NavPill to="/profil">
            <i className="ri-user-line text-headline mr-2"></i>Profil
          </NavPill>
          <NavPill to="/info">
            <i className="ri-information-line text-headline mr-2"></i>Info
          </NavPill>
        </nav>
        <div className="relative ml-auto">
          <button
            onClick={openPopup}
            className="flex-1 flex justify-center items-center mx-auto px-4 pl-6 py-2 bg-gradient-to-tr from-secondary to-primary rounded-full text-headline text-white shadow-md transition-all ease-in-out duration-200 transform hover:scale-105"
          > Lägg in bokning 
            <i className="ri-add-line text-base leading-none"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
