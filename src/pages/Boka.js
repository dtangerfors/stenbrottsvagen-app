import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Boka(props) {
  return (
    <>
      <Header>
          <div>
            <h1 className="font-title font-semibold text-heading text-white">
              Lägg in bokning
            </h1>
            <p className="max-w-prose text-base text-gray-100">
              Skriv in bokande person, antal gäster, incheckning, utcheckning
              och vilka rum/stugor du kommer använda. Allmänna utrymmen i
              huset är till för alla, och behöver därför inte vara med i
              bokningen nedan.
            </p>
          </div>
      </Header>
      <main className="bg-gray-100">
        <section className="sm:py-20 sm:px-8 grid place-items-center justify-self-stretch">
          {props.status ? null : (
            <div className="inline-block pt-20 p-8 sm:pt-8 bg-white sm:rounded-sm sm:shadow-xl">
              <Form
                onBookingComplete={props.onBookingComplete}
                user={props.user}
              />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
