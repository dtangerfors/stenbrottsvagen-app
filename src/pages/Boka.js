import React from "react";
import Form from "../components/Form";

export default function Boka(props) {
  return (
    <>
      <header className="px-8 pt-32 pb-20 lg:px-20 flex items-center self-start bg-cover-bg bg-cover bg-center">
        <div className="grid lg:grid-cols-2 gap-20 w-full max-w-screen-xl mx-auto">
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
        </div>
      </header>
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
