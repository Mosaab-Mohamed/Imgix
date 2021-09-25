import { connect } from "react-redux";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Loading from "../Components/Loading";

const Home = ({ categories }) => {
  return (
    <>
      <Banner />
      <Categories />
      {categories.length < 1 && <Loading />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Home);
