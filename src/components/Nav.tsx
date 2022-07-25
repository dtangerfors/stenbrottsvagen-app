import React from "react";
import { NavLink } from "react-router-dom";

function NavPill(props: any) {
  return (
    <NavLink
      exact
      to={props.to}
      className="flex-1 px-2 pt-2 pb-safeBottom flex flex-col text-sm leading-8 text-gray-400 text-center hover:bg-gray-100 transition-all ease-in-out duration-200 dark:hover:bg-gray-800"
      activeClassName="text-primary"
    >
      {props.children}
    </NavLink>
  );
}

function Nav({openPopup}: any) {
  return (
    <nav className="fixed z-20 bottom-0 left-0 flex justify-center w-full bg-white border-gray-200 border-t dark:bg-black dark:border-gray-700">
      <NavPill to="/">
        <i className="ri-home-line text-base"></i>Hem
      </NavPill>
      <NavPill to="/galleri">
        <i className="ri-gallery-line text-base"></i>Galleri
      </NavPill>
      <div
        style={{ width: "80px", marginTop: "-16px", backgroundSize: "80px auto" }}
        className="relative bg-menu-bg dark:bg-menu-dark bg-no-repeat bg-center-top"
      >
        <button
          onClick={openPopup}
          className="flex-1 flex justify-center items-center mx-auto m-2 bg-primary w-20 h-20 rounded-full text-base text-white transition-all hover:bg-secondary"
        >
          <i className="ri-add-line text-title1 leading-none"></i>
        </button>
      </div>
      <NavPill to="/profil">
        <i className="ri-user-line text-base"></i>Profil
      </NavPill>
      <NavPill to="/info">
        <i className="ri-information-line text-base"></i>Info
      </NavPill>
    </nav>
  );
}

export default Nav;
