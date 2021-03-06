import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import GalleryGrid from "../components/gallery/GalleryGrid";
import Image from "../components/gallery/Image";
import Header from "../components/Header";
import FixedHeader from "../components/FixedHeader";

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
    <>
      <FixedHeader>
        <h1 className="font-title font-semibold text-title1 text-white">
          Galleri
        </h1>
      </FixedHeader>
      <Header>
          <div>
            <h1 className="font-title font-semibold text-heading text-white">
              Galleri
            </h1>
          </div>
      </Header>
      <main className="mt-20">
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
    </>
  );
}
