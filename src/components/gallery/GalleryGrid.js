import React from "react";

export default function GalleryGrid(props) {
  return (
    <section className="relative py-20 px-8 lg:px-20">
      <div className="w-full max-w-screen-xl mx-auto pt-6 pb-4">
          <h2 className="text-900 dark:text-white text-title2">
            {props.galleryTitle}
          </h2>
      </div>

      <div className="max-w-screen-xl -mx-8 lg:mx-auto grid grid-cols-3 gap-2 lg:grid-cols-5">
        {props.children}
      </div>
    </section>
  );
}
