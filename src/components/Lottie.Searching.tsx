import React from "react";
import Lottie from "react-lottie";
import animationData from "../icon-searching.json";

export default function Complete() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="grid place-items-center">
      <Lottie options={defaultOptions} height={240} width={240} />
    </div>
  );
}
