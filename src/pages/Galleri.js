import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import GalleryGrid from "../components/gallery/GalleryGrid";
import Image from "../components/gallery/Image";

import galleries from "../image-data.json";

const options = {
  settings: {
    overlayColor: '#000'
  },
  buttons:  {
    showDownloadButton: false,
    showFullscreenButton: false,
    showAutoplayButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  }
}

export default function Galleri() {
  return (
    <div className="relative">
      <header className="px-8 pt-32 pb-20 lg:px-20 flex items-center self-start bg-cover-bg bg-cover bg-center">
        <div className="grid lg:grid-cols-2 gap-20 w-full max-w-screen-xl mx-auto">
          <div>
            <h1 className="font-title font-semibold text-heading text-white">
              Galleri
            </h1>
          </div>
        </div>
      </header>
      <main>
        {galleries.galleries.map((gallery, key) => {
          return (
            <SimpleReactLightbox key={`gallery-${key}`}>
              <SRLWrapper options={options}>
                <GalleryGrid galleryTitle={gallery.name}>
                  {gallery.images.map((image, key) => {
                    return <Image image={image} key={`image-${key}`} />;
                  })}
                </GalleryGrid>
              </SRLWrapper>
            </SimpleReactLightbox>
          );
        })}
      </main>
    </div>
  );
}
