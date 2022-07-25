import React, { useRef, useEffect } from "react";
import { MobileView, isMobile } from "react-device-detect";

export default function FixedHeader({children, invisibleFromStart}: any) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  // scroll event handler
  const handleScroll = () => {
    if(invisibleFromStart) {
      const elem: any = headerRef.current;
      const scrolled = document.documentElement.scrollTop;

    if (scrolled > 100) {
      elem.classList.add('opacity-100')
      elem.classList.remove('opacity-0')
    } else {
      elem.classList.add('opacity-0')
      elem.classList.remove('opacity-100')
    }}
  };

  useEffect(() => {
    if (isMobile && invisibleFromStart) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <MobileView>
      <header className={`fixed w-full mb-8 z-10 top-0 pt-safe-top px-8 bg-secondary transition-all duration-300 ${invisibleFromStart ? 'opacity-0' : 'opacity-100'}`} ref={headerRef}>
      <div className="flex items-center w-full h-20 max-w-screen-xl mx-auto">
        {children}
      </div>
      </header>
    </MobileView>
  );
}
