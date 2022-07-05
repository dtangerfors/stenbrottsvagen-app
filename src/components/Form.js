import React, { Component } from "react";
import styled from "styled-components";

import bookingDB from "../firebase/bookingDb";

const FormPart = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 65rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  font-family: inherit;

  color: inherit;
  background-color: #fff;

  height: 4.2rem;
  padding: 1rem;

  border: 1px solid #cecece;
  border-radius: 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border: 1px solid #379683;
    background-color: #e9f9e6;
  }

  &::-webkit-input-placeholder {
    color: #808080;
  }

  &:-webkit-autofill {
    background-color: #e9f9e6 !important;
  }

  &::placeholder {
    font-size: 1.3rem;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-family: "Clash Grotesk", sans-serif;
  font-weight: 500;
  letter-spacing: 0.025em;
  color: #379683;
  text-transform: uppercase;

  ${Input}:valid + & {
    color: #5cdb95;
  }
`;

const Select = styled.select`
  font-size: 1.3rem;
  font-family: inherit;

  color: inherit;
  background-color: #fff;

  height: 4.2rem;
  padding: 1rem;

  border: 1px solid #cecece;
  border-radius: 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:invalid {
    border: 1px solid #ff8552;
  }

  &:focus {
    outline: none;
    border: 1px solid #379683;
    background-color: #e9f9e6;
  }

  &::-webkit-input-placeholder {
    color: #cecece;
  }
`;

const CheckWrapper = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  border: none;
  margin-top: 0.7rem;
`;

const CheckElement = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 1rem;
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 5px;
  left: 5px;
  display: block;
  z-index: -1;
  cursor: pointer;
`;

const CheckLabel = styled.label`
  position: relative;
  z-index: 1;
  background-color: #f7f7f7;
  color: #333;
  font-size: 1.3rem;
  line-height: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.5rem 3rem;
  margin-right: 1rem;
  border-radius: 3px;

  &:hover {
    background-color: #e9f9e6;
  }

  &::before {
    content: "";
    z-index: 1;
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 5px;
    height: 15px;
    width: 15px;
    margin-right: 0.5rem;
    border: 1px solid #cecece;
    border-radius: 3px;
    transition: all 0.2s;
  }

  ${HiddenInput}:checked ~ &::before {
    border-color: #5cdb95;
    background-color: #5cdb95;
  }

  ${HiddenInput}:focus ~ & {
    background-color: #e9f9e6;
    outline: 1px solid #379683;
  }

  &::after {
    z-index: 1;
    content: "";
    position: absolute;
    display: none;
    left: 10px;
    top: 6px;
    width: 0.5rem;
    height: 1rem;
    border: solid white;
    border-width: 0 0.2rem 0.2rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ${HiddenInput}:checked ~ &::after {
    display: block;
  }

  ${HiddenInput}:checked ~ & {
    background-color: #e9f9e6;
    color: #379683;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
`;

const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Submit = styled.input.attrs({ type: "submit" })`
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 1.5rem;
  width: 100%;
  display: inline-block;
  transition: all 0.2s;
  position: relative;
  font-size: 1.5rem;
  border-radius: 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  // Change for the <button> element
  border: none;
  cursor: pointer;

  background-color: #f7f7f7;
  color: #cecece;
  transition: all 0.5s;

  ${FormPart}:invalid & {
    cursor: not-allowed;
  }

  ${FormPart}:valid & {
    background-color: #5cdb95;
    color: #fff;
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingUserID: null,
      bookingName: "",
      bookingGuests: "1",
      bookingArrival: "",
      bookingDeparture: "",
      bookingMessage: "",
      roomBungetorp: false,
      roomKammaren: false,
      roomKerstins: false,
      roomSivs: false,
      roomStensbo: false,
      roomThomas: false,
      roomVarat: false,
      createdAt: null,
      updatedAt: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTimeStamp = this.setTimeStamp.bind(this);
  }

  componentDidMount() {
    if (this.props.booking) {
      this.setState({
        bookingName: this.props.booking.bookingName,
        bookingGuests: this.props.booking.bookingGuests,
        bookingArrival: this.props.booking.bookingArrival,
        bookingDeparture: this.props.booking.bookingDeparture,
        bookingUserID: this.props.booking.bookingUserID,
        bookingMessage: this.props.booking.bookingMessage,
        createdAt: this.props.booking.createdAt,
        updatedAt: this.props.booking.updatedAt,
      });
    }

    this.setTimeStamp();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      bookingUserID: this.props.user.userData.uid || null,
    });
  }

  setTimeStamp() {

    if (this.state.createdAt !== Date.now()) {
      this.setState({
        updatedAt: Date.now()
      })
    } else {
      this.setState({
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
    }
    
  }

  addRoomsToArray() {
    const rooms = [];

    // Add value and name from each form checkbox to a array
    Array.from(document.querySelectorAll("input[type='checkbox']")).forEach(
      (input) => (input.checked ? rooms.push([input.name, input.value]) : null)
    );

    return rooms;
  }

  updateBooking(booking) {
    bookingDB.updateBooking(this.props.booking.key, booking, this.state.bookingUserID);

    this.props.onBookingComplete({
      message: 'Bokning uppdaterad',
      status: true
    });

    setTimeout(() => {
      this.props.onBookingComplete({
        message: '',
        status: false
      });
    }, 3000);

    this.props.refreshList();
  } 

  createBooking(booking) {
    bookingDB.createBooking(booking, this.state.bookingUserID);

    this.props.onBookingComplete({
      message: 'Bokning inlagd',
      status: true
    });

    this.props.closePopup();

    setTimeout(() => {
      this.props.onBookingComplete({
        message: '',
        status: false
      });
    }, 3000);
  } 

  handleSubmit(e) {
    e.preventDefault();
    const {
      bookingName,
      bookingGuests,
      bookingArrival,
      bookingDeparture,
      bookingMessage,
      bookingUserID,
      updatedAt,
      createdAt
    } = this.state;

    const booking = {
      bookingName: bookingName,
      bookingGuests: bookingGuests,
      bookingArrival: bookingArrival,
      bookingDeparture: bookingDeparture,
      bookingMessage: bookingMessage,
      bookingUserID: bookingUserID,
      createdAt: createdAt,
      updatedAt: updatedAt,
      rooms: this.addRoomsToArray(),
    };

    if (this.props.isBeingChanged) {
      this.updateBooking(booking);
    } else {
      this.createBooking(booking);
    }
    
  }

  render() {
    const {
      bookingName,
      bookingArrival,
      bookingDeparture,
      bookingGuests,
      bookingMessage,
      roomBungetorp,
      roomKammaren,
      roomKerstins,
      roomSivs,
      roomStensbo,
      roomThomas,
      roomVarat,
    } = this.state;

    return (
      <FormPart
        id="bookForm"
        name="bookingReservation"
        onSubmit={this.handleSubmit}
      >
        <FormGroup>
          <FormCol>
            <Label htmlFor="bookingName">Person som bokar</Label>
            <Input
              type="text"
              id="bookingName"
              name="bookingName"
              placeholder="Namn"
              required
              checked={bookingName}
              value={bookingName}
              onChange={this.handleInputChange}
            />
          </FormCol>
        </FormGroup>

        <FormGroup>
          <FormCol>
            <Label>Gäster</Label>
            <Select
              name="bookingGuests"
              id="bookingGuests"
              required
              checked={bookingGuests}
              value={bookingGuests}
              onChange={this.handleInputChange}
            >
              <option disabled defaultValue >
                Antal Gäster
              </option>
              <option value="1">1 gäst</option>
              <option value="2">2 gäster</option>
              <option value="3">3 gäster</option>
              <option value="4">4 gäster</option>
              <option value="5">5 gäster</option>
              <option value="6">6 gäster</option>
              <option value="7">7 gäster</option>
              <option value="8">8 gäster</option>
              <option value="9">9 gäster</option>
              <option value="10">10 gäster</option>
            </Select>
          </FormCol>
          <FormCol>
            <Label>Ankomst</Label>
            <Input
              type="date"
              name="bookingArrival"
              checked={bookingArrival}
              value={bookingArrival}
              onChange={this.handleInputChange}
              id="bookingArrival"
              placeholder="(åååå-mm-dd)"
              required
            />
          </FormCol>
          <FormCol>
            <Label>Avresa</Label>
            <Input
              type="date"
              name="bookingDeparture"
              checked={bookingDeparture}
              value={bookingDeparture}
              onChange={this.handleInputChange}
              id="bookingDeparture"
              placeholder="(åååå-mm-dd)"
              required
            />
          </FormCol>
        </FormGroup>

        <FormGroup>
          <FormCol>
            <Label as="legend">Rum/Stugor</Label>
            <CheckWrapper>
              <CheckElement>
                <HiddenInput
                  type="checkbox"
                  name="roomBungetorp"
                  value="Bungetorp"
                  id="room-bungetorp"
                  checked={roomBungetorp}
                  onChange={this.handleInputChange}
                />
                <CheckLabel htmlFor="room-bungetorp">Bungetorp</CheckLabel>
              </CheckElement>
              <CheckElement>
                <HiddenInput
                  type="checkbox"
                  name="roomKammaren"
                  value="Kammaren"
                  id="room-kammaren"
                  checked={roomKammaren}
                  onChange={this.handleInputChange}
                />
                <CheckLabel htmlFor="room-kammaren">Kammaren</CheckLabel>
              </CheckElement>

              <CheckElement>
                <HiddenInput
                  type="checkbox"
                  name="roomKerstins"
                  value="Kerstins"
                  id="room-kerstins"
                  checked={roomKerstins}
                  onChange={this.handleInputChange}
                />
                <CheckLabel htmlFor="room-kerstins">Kerstins</CheckLabel>
              </CheckElement>
              <CheckElement>
                <HiddenInput
                  type="checkbox"
                  name="roomSivs"
                  value="Sivs"
                  id="room-sivs"
                  checked={roomSivs}
                  onChange={this.handleInputChange}
                />
                <CheckLabel htmlFor="room-sivs">Sivs</CheckLabel>
              </CheckElement>

              <CheckElement>
                <HiddenInput
                  type="checkbox"
                  name="roomStensbo"
                  value="Stensbo"
                  id="room-stensbo"
                  checked={roomStensbo}
                  onChange={this.handleInputChange}
                />
                <CheckLabel htmlFor="room-stensbo">Stensbo</CheckLabel>
              </CheckElement>
              <CheckElement>
                <HiddenInput
                  type="checkbox"
                  name="roomThomas"
                  value="Thomas"
                  id="room-thomas"
                  checked={roomThomas}
                  onChange={this.handleInputChange}
                />
                <CheckLabel htmlFor="room-thomas">Thomas</CheckLabel>
              </CheckElement>

              <CheckElement>
                <HiddenInput
                  type="checkbox"
                  name="roomVarat"
                  value="Vårat"
                  id="room-varat"
                  checked={roomVarat}
                  onChange={this.handleInputChange}
                />
                <CheckLabel htmlFor="room-varat">Vårat</CheckLabel>
              </CheckElement>
            </CheckWrapper>
          </FormCol>
        </FormGroup>

        <FormGroup>
          <FormCol>
            <Label htmlFor="bookingMessage">Eventuellt meddelande</Label>
            <Input
              type="text"
              id="bookingMessage"
              name="bookingMessage"
              placeholder="Meddelande"
              checked={bookingMessage}
              value={bookingMessage}
              onChange={this.handleInputChange}
            />
          </FormCol>
        </FormGroup>

        <FormGroup>
          <FormCol>
            <Submit name="Submit" value={this.props.isBeingChanged ? 'Uppdatera bokning' : 'Skapa bokning'} />
          </FormCol>
        </FormGroup>
      </FormPart>
    );
  }
}