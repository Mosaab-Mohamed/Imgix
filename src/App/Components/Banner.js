import { useEffect } from "react";
import { connect } from "react-redux";
import { getRandomPhotos } from "../Actions/data";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, EffectFade, Autoplay]);

const Banner = ({ randomPhotos, getRandomPhotos }) => {
  useEffect(() => {
    getRandomPhotos();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="banner">
      <Swiper
        effect={"fade"}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
      >
        {randomPhotos.map((photo) => {
          return (
            <SwiperSlide key={photo.id}>
              <div className="banner__slide">
                <div className="banner__overlay">
                  <div className="banner__content">
                    This application uses the RESTFUL API of unsplash
                  </div>
                </div>
                <img src={photo.urls.regular} alt="randomPhoto" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomPhotos: state.randomPhotos,
  };
};
export default connect(mapStateToProps, { getRandomPhotos })(Banner);
