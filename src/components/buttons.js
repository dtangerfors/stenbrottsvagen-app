import React from "react";

const TaskButton = ({ onClick, actionText, icon }) => {
  const iconClassName = `ri-${icon}-fill`;

  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center ml-4 text-base text-gray-400 leading-none w-12 h-12 rounded-full hover:bg-gray-100 transition-all ease-in-out duration-200"
    >
      <span className="sr-only">{actionText}</span>{" "}
      <i className={iconClassName}></i>
    </button>
  );
};

const PrimaryButton = ({ onClick, actionText, text }) => {
  
    return (
      <button
        onClick={onClick}
        className="appearance-none bg-primary text-white text-headline uppercase tracking-widest py-6 px-16 leading-none rounded-full font-medium hover:bg-secondary transition-all ease-in-out duration-200"
      >
        <span className="sr-only">{actionText}</span>{" "}
        {text}
      </button>
    );
  };

export { TaskButton, PrimaryButton };
