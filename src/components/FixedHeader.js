import React, { useRef, useEffect } from "react";

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left <
        (window.innerWidth ||
          document.documentElement.clientWidth) &&
      rect.top <
        (window.innerHeight ||
          document.documentElement.clientHeight)
    );
  }

export default function FixedHeader(props) {
  const headerRef = useRef(null);

  // scroll event handler
  const handleScroll = () => {
    const elem = headerRef.current;
    var elemPositionY = elem.offsetTop - document.documentElement.scrollTop;

    if (isElementInViewport(elem) && elemPositionY <= 0) {
        elem.classList.add('bg-white', 'dark:bg-ultraBlack')
    } else {
        elem.classList.remove('bg-white', 'dark:bg-ultraBlack')
    } 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="sticky z-10 top-0 -mx-8 xl:-mx-20 pt-6 pb-4 mb-8 transition-all ease-linear duration-100" ref={headerRef}>
        <div className="w-full max-w-screen-xl mx-auto px-8">
            {props.children}
        </div>
    </div>
  );
}
