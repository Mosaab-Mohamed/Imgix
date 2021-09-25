import { connect } from "react-redux";
import ImgsGrid from "../Components/ImgsGrid";
import Pagination from "../Components/Pagination";
import Loading from "../Components/Loading";

const Gallery = ({ photos }) => {
  return (
    <div className="gallery">
      <div className="container">
        <h1 className="gallery_header">GALLERY</h1>
        <ImgsGrid />
        {photos.length > 1 && <Pagination />}
        {photos.length < 1 && <Loading />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps)(Gallery);
