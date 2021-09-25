import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getPhotos, getCollectionPhotos } from "../Actions/data";
import PhotoCard from "./PhotoCard";
import GalleryModal from "./GalleryModal";

const ImgsGrid = ({ getPhotos, getCollectionPhotos, photos }) => {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (params.id) {
      getCollectionPhotos(params.id);
    } else {
      getPhotos();
    }

    // eslint-disable-next-line
  }, []);

  const onPhotoClick = (index, photo) => {
    setOpenModal(true);
    setPhotoIndex(index);
    setSelectedPhoto(photo);
  };

  return (
    <>
      <div className="imgs-grid">
        <div className="row">
          <div className="col-12 col-sm-4">
            {photos.map((photo, index) => {
              if (index < Math.floor(photos.length / 3)) {
                return (
                  <PhotoCard
                    photo={photo}
                    index={index}
                    key={photo.id}
                    onPhotoClick={onPhotoClick}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="col-12 col-sm-4">
            {photos.map((photo, index) => {
              if (
                index >= Math.floor(photos.length / 3) &&
                index <= Math.floor(photos.length / 1.5)
              ) {
                return (
                  <PhotoCard
                    photo={photo}
                    index={index}
                    key={photo.id}
                    onPhotoClick={onPhotoClick}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="col-12 col-sm-4">
            {photos.map((photo, index) => {
              if (index > Math.floor(photos.length / 1.5)) {
                return (
                  <PhotoCard
                    photo={photo}
                    index={index}
                    key={photo.id}
                    onPhotoClick={onPhotoClick}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {openModal && (
        <GalleryModal
          photoIndex={photoIndex}
          selectedPhoto={selectedPhoto}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps, { getPhotos, getCollectionPhotos })(
  ImgsGrid
);
