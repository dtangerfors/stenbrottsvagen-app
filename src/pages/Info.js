import React from "react";
import FixedHeader from "../components/FixedHeader";
import Header from "../components/Header";
import ReleaseList from "../components/ReleaseList";

export default function Info() {
  return (
    <>
      <FixedHeader>
        <h1 className="font-title font-semibold text-heading text-black dark:text-white">
          Info
        </h1>
      </FixedHeader>
      <Header>
        <div>
          <h1 className="font-title font-semibold text-heading text-white">
            Info
          </h1>
        </div>
      </Header>
      <main className="py-20 pb-32 px-8 lg:px-20 flex-1 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto">
          <div></div>
          <ReleaseList key="release-list" />
        </div>
      </main>
    </>
  );
}
