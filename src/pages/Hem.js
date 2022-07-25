import React from "react";
import ViewAllBookings from "../components/ViewAllBookings";
import Weather from "../components/Weather";
import FixedHeader from "../components/FixedHeader";
import logo from "../images/logo.svg"

function Hem({openPopup, isUpdatingBooking}) {
  return (
    <>
      <div className="relative z-0 pt-safe-top">
      <FixedHeader invisibleFromStart>
        <h1 className="flex items-center">
         <span className="sr-only">Stenbrottsvägen 3</span>
         <img src={logo} width={34} />
        </h1>
      </FixedHeader>
        <header className="w-full px-8 pt-32 pb-20 lg:px-20 lg:min-h-[80vh] flex items-center self-start bg-transparent">
          <div className="grid lg:grid-cols-2 gap-20 w-full max-w-screen-xl mx-auto">
            <div>
              <h1 className="font-title font-semibold text-heading text-white">
                Stenbrottsvägen 3
              </h1>
              <h2 className="text-base text-gray-100 uppercase tracking-wider font-medium mb-8">
                Bokning och nyttig info för vårat släkthus
              </h2>
              <p className="max-w-prose text-base text-gray-100">
                Välkommen till vår portal på webben för Stenbrottsvägen 3. Här
                kan du lägga in datum du besöker huset, finna nödvändig
                information och annat som kan vara bra att veta!
              </p>
            </div>
            <div className="grid gap-8">
              <button
                onClick={openPopup}
                className="relative w-full rounded-sm p-8 bg-white"
              >
                <h2 className="font-sans text-base font-medium text-black">
                  <span className="text-secondary">Dags att resa?</span> Lägg in
                  bokning här &rarr;
                </h2>
              </button>
              <div className="relative w-full rounded-sm p-8 bg-white">
                <Weather />
              </div>
            </div>
          </div>
        </header>
        <main className="grid">
          <section className="py-20 px-8 lg:px-20 bg-lightGray dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto">
            <h2 className="text-black dark:text-white text-title1 pb-4">
                Inlagda bokningar
              </h2>
              <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ViewAllBookings isUpdatingBooking={isUpdatingBooking} />
              </div>
            </div>
          </section>
          <section className="py-20 px-8 lg:px-20">
            <div className="w-full max-w-screen-xl mx-auto">
            <h2 className="text-white dark:text-white text-title1 pb-4">
                Bra att veta
              </h2>
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-sm shadow-xl pt-8 pb-12 bg-white w-full dark:bg-black">
                  <div className="text-center mb-10">
                    <h3 className="font-sans text-title2 text-black dark:text-white">
                      Hyra
                    </h3>
                  </div>
                  <table className="relative w-full text-left text-headline text-black dark:text-gray-100">
                    <tbody>
                      <tr>
                        <th className="pb-2 first:pl-8 last:pr-8">
                          Antal veckor
                        </th>
                        <th className="pb-2 first:pl-8 last:pr-8">Vuxen</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Barn</th>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-700">
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
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <td className="py-2 first:pl-8 last:pr-8">
                          Två veckor
                        </td>
                        <td className="py-2 first:pl-8 last:pr-8">500 kr</td>
                        <td className="py-2 first:pl-8 last:pr-8">200 kr</td>
                      </tr>
                      <tr className="text-gray-600 dark:text-gray-100">
                        <td colSpan="3" className="pt-8 px-8">
                          Uthyrning för vecka 3500:- Pengarna insättes på konto:
                          5217&nbsp;167&nbsp;0357&nbsp;77 (SEB), senast samma år.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-sm shadow-xl pt-8 pb-12 bg-white w-full dark:bg-black">
                  <div className="text-center mb-10">
                    <h3 className="font-sans text-title2 text-black dark:text-white">
                      Sophämtning
                    </h3>
                  </div>
                  <table className="relative w-full text-left text-headline text-black dark:text-gray-100">
                    <tbody>
                      <tr>
                        <th className="pb-2 first:pl-8 last:pr-8">Hämtning</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Period</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Tisdag</th>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <td className="py-2 first:pl-8 last:pr-8">Brännbart</td>
                        <td className="py-2 first:pl-8 last:pr-8">14-dag</td>
                        <td className="py-2 first:pl-8 last:pr-8">Udda v</td>
                      </tr>
                      <tr>
                        <td className="py-2 first:pl-8 last:pr-8">Kompost</td>
                        <td className="py-2 first:pl-8 last:pr-8">14-dag</td>
                        <td className="py-2 first:pl-8 last:pr-8">Jämn v</td>
                      </tr>
                      <tr className="text-gray-600 dark:text-gray-100">
                        <td colSpan="3" className="pt-8 px-8"><span className="text-headline font-bold text-black dark:text-white block">Aktuella datum 2022:</span> 28 jun, 12 jul, 26 jul, 9 aug, 23 aug och 6 sep</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-sm shadow-xl pt-8 pb-12 bg-white w-full dark:bg-black">
                  <div className="text-center mb-10">
                    <h3 className="font-sans text-title2 text-black dark:text-white">
                      Övrig info
                    </h3>
                  </div>
                  <div className="relative px-8 pb-8">
                    <h4 className="text-headline font-bold dark:text-white">
                      ÅVC Fårösund
                    </h4>
                    <p className="text-headline dark:text-gray-100">
                      Förutom vanligt avfall går det även att lämna
                      betalsopsäckar. Grovavfall lämnas mot avgift, 50 kr
                      (personbil) eller 100 kr (+släpvagn). Öppettider enligt
                      nedan.
                    </p>
                  </div>
                  <table className="relative w-full text-left text-headline text-black dark:text-gray-100">
                    <tbody>
                      <tr>
                        <th className="pb-2 first:pl-8 last:pr-8">Måndag</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Torsdag</th>
                        <th className="pb-2 first:pl-8 last:pr-8">Lördag</th>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-700">
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
