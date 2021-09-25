import { useState } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Zoom } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/components/zoom/zoom.min.css";

SwiperCore.use([Navigation, Thumbs, Zoom]);

const GalleryModal = ({ photos, photoIndex, setOpenModal, selectedPhoto }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return createPortal(
    <div className="gallery-modal">
      <div className="gallery_toolbar">
        <div
          className="toolbar_item toolbar_item--x"
          onClick={() => setOpenModal(false)}
        >
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="toolbar_item toolbar_item--download">
          <a href={`${selectedPhoto.links.download}?force=true`} download>
            <i className="bi bi-download"></i>
          </a>
        </div>
      </div>

      <Swiper
        className="swiper1"
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        initialSlide={photoIndex}
        zoom={true}
      >
        {photos.map((photo) => {
          return (
            <SwiperSlide key={photo.id}>
              <div className="swiper-zoom-container">
                <img
                  src={photo.urls.regular}
                  alt="thumb"
                  className="regular_img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        className="swiper2"
        spaceBetween={2}
        slidesPerView={6}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        initialSlide={photoIndex}
      >
        {photos.map((photo) => {
          return (
            <SwiperSlide key={photo.id}>
              <div className="overlay"></div>
              <img
                src={photo.urls.regular}
                alt="thumb"
                className="thumbs_img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>,
    document.getElementById("gallery-modal")
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps)(GalleryModal);
