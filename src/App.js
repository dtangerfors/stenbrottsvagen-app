import React, { Component } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { signInWithPopup } from "firebase/auth";
import "remixicon/fonts/remixicon.css";

import { auth, provider } from "./firebase.js";
import Login from "./components/Login";
import Nav from "./components/Nav.js";
import Profil from "./pages/Profil.js";
import Boka from "./pages/Boka.js";
import Hem from "./pages/Hem.js";
import Galleri from "./pages/Galleri.js";
import Complete from "./components/Complete.js";
import Info from "./pages/Info.js";
import Popup from "./components/Popup.js";
import DesktopHeader from "./components/DesktopHeader.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        loggedIn: false,
        userData: null,
      },
      bookingSuccess: {
        status: false,
        message: "",
      },
      popupIsOpen: false,
    };

    this.handleCompleteBooking = this.handleCompleteBooking.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  handleCompleteBooking(data) {
    this.setState({
      bookingSuccess: {
        status: data.status,
        message: data.message,
      },
    });
  }

  login() {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      this.setState({
        user: {
          loggedIn: true,
          userData: user,
        },
      });
    });

  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: {
          loggedIn: false,
          userData: null,
        },
      });
    });
  }

  openPopup() {
    this.setState({
      popupIsOpen: true,
    });

    document.body.style.overflow = "hidden";
  }

  closePopup() {
    this.setState({
      popupIsOpen: false,
    });

    document.body.style.overflow = null;
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: {
            loggedIn: true,
            userData: user,
          },
        });
      }
    });
  }

  render() {
    const { user, bookingSuccess, popupIsOpen } = this.state;
    return (
      <>
        <div className="App">
          {user.userData ? (
            <Router>
              <BrowserView className="sticky z-10 top-0">
                <DesktopHeader openPopup={this.openPopup}/>
              </BrowserView>
              <div
                className="flex flex-col relative min-h-screen"
                style={{ paddingBottom: "66px" }}
              >
                <Switch>
                  <Route path="/profil">
                    <Profil
                      user={user}
                      logout={this.logout}
                      onBookingComplete={this.handleCompleteBooking}
                    />
                  </Route>
                  <Route path="/boka">
                    <Boka
                      user={user}
                      onBookingComplete={this.handleCompleteBooking}
                      status={bookingSuccess.status}
                    />
                  </Route>
                  <Route path="/galleri">
                    <Galleri />
                  </Route>
                  <Route path="/info">
                    <Info />
                  </Route>
                  <Route path="/">
                    <Hem openPopup={this.openPopup} />
                  </Route>
                </Switch>
              </div>
              <MobileView>
              <Nav openPopup={this.openPopup} />
              </MobileView>
            </Router>
          ) : (
            <Login login={this.login} />
          )}

          {bookingSuccess.status ? (
            <Complete message={bookingSuccess.message} />
          ) : null}

          <Popup
            popupIsOpen={popupIsOpen}
            closePopup={this.closePopup}
            user={user}
            onBookingComplete={this.handleCompleteBooking}
          />
        </div>
      </>
    );
  }
}
