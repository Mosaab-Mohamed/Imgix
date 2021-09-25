import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// SWIPER SLIDER FILES
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// REDUX
import { connect } from "react-redux";
import { getCategories } from "../Actions/data";

// CATEGORY CARD COMPONENT
import CategoryCard from "./CategoryCard";

// INSTALLING SWIPER MODULE
SwiperCore.use([Navigation]);

const Categories = ({ getCategories, categories }) => {
  const [lgScreen, setLgScreen] = useState(() => {
    return window.innerWidth > 767 ? true : false;
  });

  useEffect(() => {
    // Function to get the categroeis from API
    getCategories();

    // Function to set lgScreen boolean
    const resizeScreen = () => {
      window.innerWidth > 767 ? setLgScreen(true) : setLgScreen(false);
    };

    // Invoke the resize function on resizing the screen
    window.addEventListener("resize", resizeScreen);

    // CleanUp function
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="categories py-5">
      <div className="container">
        <h1 className="categories__header py-5">COLLECTIONS</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          navigation={lgScreen}
          breakpoints={{
            767: {
              slidesPerView: 2,
            },

            991: {
              slidesPerView: 3,
            },
          }}
        >
          {categories.map((category) => {
            return (
              <SwiperSlide key={category.id}>
                <Link to={`/gallery/${category.id}`}>
                  <CategoryCard
                    title={category.title}
                    image={category.cover_photo.urls.regular}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { getCategories })(Categories);
