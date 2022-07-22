import React from "react";
import { MobileView } from "react-device-detect";

export default function FixedHeader(props) {
  return (
    <MobileView className="fixed w-full mb-8 z-10 top-0 h-20 px-8 bg-white dark:bg-black">
      <div className="w-full max-w-screen-xl mx-auto">
        {props.children}
      </div>
    </MobileView>
  );
}
