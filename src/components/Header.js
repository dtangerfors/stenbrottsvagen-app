import React from "react";
import { BrowserView } from "react-device-detect";

function Header(props) {
  return (
    <BrowserView>
      <header className="w-full px-8 pt-32 pb-20 lg:px-20 flex items-center self-start bg-cover-bg bg-cover bg-center">
        <div className="grid lg:grid-cols-2 gap-20 w-full max-w-screen-xl mx-auto">
          {props.children}
        </div>
      </header>
    </BrowserView>
  );
}

export default Header;
