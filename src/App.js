import React, { Component } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import { auth, provider } from "./firebase.js";
import Login from "./components/Login";
import Nav from "./components/Nav.js";
import Profil from "./pages/Profil.js";
import Boka from "./pages/Boka.js";
import Hem from "./pages/Hem.js";
import Complete from "./components/Complete.js";

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
    };

    this.handleCompleteBooking = this.handleCompleteBooking.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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
    auth.signInWithPopup(provider).then((result) => {
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
    return (
      <>
        <div className="App">
          {this.state.user.userData ? (
            <Router>
              
                <div className="grid relative min-h-screen">
                  <Switch>
                    <Route path="/profil">
                      <Profil
                        user={this.state.user}
                        logout={this.logout}
                        onBookingComplete={this.handleCompleteBooking}
                      />
                    </Route>
                    <Route path="/boka">
                      <Boka
                        user={this.state.user}
                        onBookingComplete={this.handleCompleteBooking}
                        status={this.state.bookingSuccess.status}
                      />
                    </Route>
                    <Route path="/">
                      <Hem />
                    </Route>
                  </Switch>
                </div>
              <Nav />
            </Router>
          ) : (
            <Login login={this.login} />
          )}

          {this.state.bookingSuccess.status ? (
            <Complete message={this.state.bookingSuccess.message} />
          ) : null}
        </div>
      </>
    );
  }
}
