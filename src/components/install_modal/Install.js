// Src code found at https://medium.com/swlh/a-simple-react-hook-to-prompt-ios-users-to-install-your-wonderful-pwa-4cc06e7f31fa

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import image from "../../images/apple-touch-icon.png"
import share from "../../images/AppleShare.png"

const useModal = (initialMode = false) => {
   const [modalOpen, setModalOpen] = useState(initialMode);
   const toggle = () => setModalOpen(!modalOpen);

   return [modalOpen, setModalOpen, toggle];
}


const InstallPWA = ({...props}) => {
    const [modalOpen, setModalOpen, toggleModal] = useModal();

    useEffect(
        () => {
            setModalOpen(true)
        }, []
    )
    return (
        <Modal
            isActive={modalOpen}
            className="notification-card flex justify-center items-center bg-white rounded-sm shadow-xl p-8">
                <div style={{maxWidth: "300px"}} className="flex flex-col justify-center items-center">
                    <div style={{marginTop: "-50px"}} className="rounded-[2rem] overflow-hidden">
                        <img
                            src={image}
                            height="72"
                            width="72"
                            alt="Installera PWA"
                            />
                    </div>
                    <div className="text-center pt-4">
                        <h3 className="font-sans font-medium text-title2 text-black-900">Installera SBV 3</h3>
                    </div>
                    <p className="text-gray-500 text-base text-center">Installera applikationen på din telefon för en bättre upplevelse.</p>
                    <div className="text-center py-4">
                        <p className="text-headline text-gray-500">
                        Klicka på
                        <img
                            src={share}
                            style={{margin: "auto 4px 8px"}}
                            className="inline-block"
                            alt="Add to homescreen"
                            height="20"
                            width="20"
                            />
                        och sedan &quot;Lägg till på hemskärmen&quot;
                        </p>
                    </div>
                    <button className="block p-4 text-primary text-headline uppercase" onClick={() => setModalOpen(false)}>Stäng</button>
            </div>
        </Modal>
    )
}

export default InstallPWA