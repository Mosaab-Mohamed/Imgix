import { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getPhotos, getCollectionPhotos } from "../Actions/data";

const Pagination = ({ getPhotos, getCollectionPhotos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);

    params.id ? getCollectionPhotos(params.id, page) : getPhotos(page);
  };

  return (
    <div className="my-pagination">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return (
          <div
            className={`pagination_item ${currentPage === item && "active"}`}
            key={item}
            onClick={() => changePage(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, { getPhotos, getCollectionPhotos })(Pagination);
