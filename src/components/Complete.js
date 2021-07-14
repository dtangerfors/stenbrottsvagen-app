import React from "react";
import Lottie from "react-lottie";
import animationData from "../complete-icon.json";

export default function Complete(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fixed top-8 px-8 w-full">
      <div className="max-w-screen-sm px-8 mx-auto flex justify-start items-center bg-white rounded-sm shadow-xl">
        <div className="mr-12">
          <Lottie options={defaultOptions} height={60} width={60} />
        </div>
        <p className="text-base">{props.message}</p>
      </div>
    </div>
  );
}
