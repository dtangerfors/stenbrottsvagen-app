import React from "react";

export default function GalleryGrid(props) {
  return (
    <section className="relative py-20 px-8 lg:px-20">
      <div className="sticky z-10 top-0 -mx-8 xl:-mx-20 pt-6 pb-4 mb-8 bg-white dark:bg-ultraBlack transition-all ease-linear duration-100">
        <div className="w-full max-w-screen-xl mx-auto px-8">
          <h2 className="text-black dark:text-white text-title1">
            {props.galleryTitle}
          </h2>
        </div>
      </div>

      <div className="max-w-screen-xl -mx-8 lg:mx-auto grid grid-cols-3 gap-2 lg:grid-cols-5">
        {props.children}
      </div>
    </section>
  );
}
