import React from "react";
import ReleaseList from "../components/ReleaseList";

export default function Info() {
  return (
    <>
      <header className="px-8 pt-32 pb-20 lg:px-20 flex items-center bg-cover-bg bg-cover bg-center">
        <div className="grid lg:grid-cols-2 gap-20 w-full max-w-screen-xl mx-auto">
          <div>
            <h1 className="font-title font-semibold text-heading text-white">
              Info
            </h1>
          </div>
        </div>
      </header>
      <main className="py-20 pb-32 px-8 lg:px-20 flex-1 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto">
          <div>
          </div>
        <ReleaseList />
         </div>
      </main>
    </>
  );
}
