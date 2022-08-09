import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import usePortal from "./usePortal";

const Modal = ({isActive, children, ...props}) => {
    const target = usePortal("ModalParent");
    const [isShowing, setIsShowing] = useState(false);
    const showingRef = useRef(false);

    useEffect(
        () => {
            let timer;
            if (isActive) {
                setIsShowing(true);
                document.body.style.top = `-${window.scrollY}px`;
            } else {
                timer = setTimeout(() => {
                    setIsShowing(showingRef.current);
                }, 1000)
                const scrollY = document.body.style.top;
                document.body.style.position = "";
                document.body.style.top = "";
                window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
            return () => clearTimeout(timer);
        }, [isActive]
    )

    const containerRef = useRef();
    const cardRef = useRef();


    return (
        isShowing && ReactDOM.createPortal(
            <div
                className="fixed z-50 inset-0 w-full h-full bg-black-900/30 grid place-items-center "
                tabIndex={-1} role="dialog">
                <div
                    className={`modal-container grid place-items-center ${props.className}`}>
                    {children}
                </div>
            </div>,
            target
        )
    )
}

export default Modal;