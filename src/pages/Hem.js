import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import ViewAllBookings from "../components/ViewAllBookings";
import Weather from "../components/Weather";

function Hem() {
  return (
    <>
      <div className="relative z-0">
        <Header>
          <div>
            <h1 className="font-title font-semibold text-heading text-white">
              Stenbrottsvägen 3
            </h1>
            <h2 className="text-base text-gray-100 uppercase tracking-wider font-medium mb-8">
              Bokning och nyttig info för vårat släkthus
            </h2>
            <p className="max-w-prose text-base text-gray-100">
              Välkommen till vår portal på webben för Stenbrottsvägen 3. Här kan
              du lägga in datum du besöker huset, finna nödvändig information
              och annat som kan vara bra att veta!
            </p>
          </div>
          <div className="grid gap-8">
            <NavLink
              to="/boka"
              className="relative w-full rounded-sm shadow-xl p-8 bg-white"
            >
              <h2 className="font-sans text-base font-medium text-black">
                <span className="text-secondary">Dags att resa?</span> Lägg in
                bokning här &rarr;
              </h2>
            </NavLink>
            <div className="relative w-full rounded-sm shadow-xl p-8 bg-white">
              <Weather />
            </div>
          </div>
        </Header>
        <main className="grid">
          <section className="py-20 px-8 lg:px-20 bg-gray-100">
            <div className=" w-full max-w-screen-xl mx-auto">
              <div className="mb-12">
                <h2 className="text-black text-title1">Inlagda bokningar</h2>
              </div>
              <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ViewAllBookings />
              </div>
            </div>
          </section>
          <section className="py-20 px-8 lg:px-20">
            <div className="w-full max-w-screen-xl mx-auto">
              <div className="mb-12">
                <h2 className="text-white text-title1">Bra att veta</h2>
              </div>
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-sm shadow-xl pt-8 pb-12 bg-white w-full">
                  <div className="text-center mb-10">
                    <h3 className="font-sans text-title2 text-black">Hyra</h3>
                  </div>
                  <table className="relative w-full text-left text-headline text-black">
                    <tbody>
                      <tr>
                        <th className="pb-2 first:pl-8 last:pr-8">
                          Antal veckor
                        </th>
                        <th className="pb-2 first:pl-8 last:pr-8">Vuxen</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Barn</th>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="py-2 first:pl-8 last:pr-8">En vecka</td>
                        <td className="py-2 first:pl-8 last:pr-8">300 kr</td>
                        <td className="py-2 first:pl-8 last:pr-8">100 kr</td>
                      </tr>
                      <tr>
                        <td className="py-2 first:pl-8 last:pr-8">
                          Upp till två veckor
                        </td>
                        <td className="py-2 first:pl-8 last:pr-8">400 kr</td>
                        <td className="py-2 first:pl-8 last:pr-8">150 kr</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="py-2 first:pl-8 last:pr-8">
                          Två veckor
                        </td>
                        <td className="py-2 first:pl-8 last:pr-8">500 kr</td>
                        <td className="py-2 first:pl-8 last:pr-8">200 kr</td>
                      </tr>
                      <tr className="text-gray-600">
                        <td colSpan="3" className="pt-8 px-8">
                          Uthyrning för vecka 3500:- Pengarna insättes på konto:
                          5385 015 163-8, senast samma år.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-sm shadow-xl pt-8 pb-12 bg-white w-full">
                  <div className="text-center mb-10">
                    <h3 className="font-sans text-title2 text-black">
                      Sophämtning
                    </h3>
                  </div>
                  <table className="relative w-full text-left text-headline text-black">
                    <tbody>
                      <tr>
                        <th className="pb-2 first:pl-8 last:pr-8">Hämtning</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Period</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Tisdag</th>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="py-2 first:pl-8 last:pr-8">Brännbart</td>
                        <td className="py-2 first:pl-8 last:pr-8">14-dag</td>
                        <td className="py-2 first:pl-8 last:pr-8">Udda v</td>
                      </tr>
                      <tr>
                        <td className="py-2 first:pl-8 last:pr-8">Kompost</td>
                        <td className="py-2 first:pl-8 last:pr-8">14-dag</td>
                        <td className="py-2 first:pl-8 last:pr-8">Jämn v</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-sm shadow-xl pt-8 pb-12 bg-white w-full">
                  <div className="text-center mb-10">
                    <h3 className="font-sans text-title2 text-black">
                      Övrig info
                    </h3>
                  </div>
                  <div className="relative px-8 pb-8">
                    <h4 className="text-headline font-bold">ÅVC Fårösund</h4>
                    <p className="text-headline">
                      Förutom vanligt avfall går det även att lämna
                      betalsopsäckar. Grovavfall lämnas mot avgift, 50 kr
                      (personbil) eller 100 kr (+släpvagn). Öppettider enligt
                      nedan.
                    </p>
                  </div>
                  <table className="relative w-full text-left text-headline text-black">
                    <tbody>
                      <tr>
                        <th className="pb-2 first:pl-8 last:pr-8">Måndag</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Torsdag</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Lördag</th>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="py-2 first:pl-8 last:pr-8">7-18</td>
                        <td className="py-2 first:pl-8 last:pr-8">7-15/18</td>
                        <td className="py-2 first:pl-8 last:pr-8">9-15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="h-screen w-screen fixed inset-0 -z-1 bg-cover-bg bg-cover bg-center portrait:bg-portrait-cover-bg"></div>
      </div>
    </>
  );
}

export default Hem;
