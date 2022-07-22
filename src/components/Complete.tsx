import React from "react";
import Lottie from "react-lottie";
import animationData from "../complete-icon.json";

export default function Complete(props: any) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fixed top-0 z-50 px-8 w-full bg-gradient-to-b from-black/10 to-black/0 py-10">
      <div className="max-w-screen-sm pr-8 pl-4 mx-auto flex justify-start items-center bg-white rounded-sm shadow-xl">
        <div className="mr-4">
          <Lottie options={defaultOptions} height={60} width={60} />
        </div>
        <p className="text-base text-black">{props.message}</p>
      </div>
    </div>
  );
}
