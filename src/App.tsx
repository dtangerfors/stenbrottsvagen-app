import React, { useState, useEffect } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { signInWithPopup } from "firebase/auth";
import "remixicon/fonts/remixicon.css";

import { auth, provider } from "./firebase";
import { UserContext } from "./user-context";
import Login from "./components/Login";
import DesktopHeader from "./components/DesktopHeader";
import Nav from "./components/Nav";
import Complete from "./components/Complete";
import Popup from "./components/popup_window";
import Hem from "./pages/Hem";
import Galleri from "./pages/Galleri";
import Info from "./pages/Info";
import Profil from "./pages/Profil";

// Install PWA modules
import useIsIOS from "./components/install_modal/useIsIOS";
import InstallPWA from "./components/install_modal/Install";

const App = () => {
  const { prompt }: any = useIsIOS();
  const [user, setUser] = useState({
    loggedIn: false,
    userData: {},
  });

  const [bookingSuccess, setBookingSuccess] = useState({
    status: false,
    message: "",
  });

  const [popupForm, setPopupForm] = useState({
    isOpen: false,
    isUpdatingBooking: false,
    bookingKey: "",
  });

  const handleCompleteBooking = (data: any) => {
    setBookingSuccess({
      status: data.status,
      message: data.message,
    });
  };

  const login = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setUser({
        loggedIn: true,
        userData: user,
      });
    });
  };

  const logout = () => {
    auth.signOut().then(() => {
      setUser({
        loggedIn: false,
        userData: {},
      });
    });
  };

  const openPopup = () => {
    setPopupForm({
      isOpen: true,
      isUpdatingBooking: false,
      bookingKey: "",
    });

    document.body.style.overflow = "hidden";
  };

  const editBooking = (key: string) => {
    setPopupForm({
      isOpen: true,
      isUpdatingBooking: true,
      bookingKey: key,
    });

    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupForm({
      isOpen: false,
      isUpdatingBooking: false,
      bookingKey: "",
    });

    document.body.style.overflow = "";
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          loggedIn: true,
          userData: user,
        });
      }
    });
  }, []);

  return (
      <div className="App">
        <UserContext.Provider value={user.userData}>
          {user.loggedIn ? (
            <Router>
              <BrowserView className="sticky z-10 top-0">
                <DesktopHeader openPopup={openPopup} />
              </BrowserView>
              <div
                className="flex flex-col relative min-h-screen"
                style={{ paddingBottom: isMobile ? 66 : 0 }}
              >
                <Switch>
                  <Route path="/profil">
                    <Profil
                      user={user}
                      logout={logout}
                      isUpdatingBooking={editBooking}
                    />
                  </Route>
                  <Route path="/galleri">
                    <Galleri />
                  </Route>
                  <Route path="/info">
                    <Info />
                  </Route>
                  <Route path="/">
                    <Hem
                      openPopup={openPopup}
                      isUpdatingBooking={editBooking}
                    />
                  </Route>
                </Switch>
              </div>
              <MobileView>
                <Nav openPopup={openPopup} />
              </MobileView>
            </Router>
          ) : (
            <Login login={login} />
          )}

          {bookingSuccess.status ? (<Complete message={bookingSuccess.message} />) : null}

          <Popup
            popupForm={popupForm}
            closePopup={closePopup}
            user={user}
            onBookingComplete={handleCompleteBooking}
          />
        </UserContext.Provider>
        {prompt && <InstallPWA />}
      </div>
  );
};

export default App;