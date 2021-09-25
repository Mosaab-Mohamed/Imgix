import { useEffect, useState, useRef } from "react";

const PhotoCard = ({ photo, index, onPhotoClick }) => {
  const [showClass, setShowClass] = useState(false);
  const photoEle = useRef();

  useEffect(() => {
    // Function to check whether the window is scrolled to the offsetTop of the element
    const calcShow = () =>
      window.innerHeight + window.scrollY > photoEle.current.offsetTop
        ? setShowClass(true)
        : setShowClass(false);

    // Invoke calcShow function
    calcShow();

    // Invoke calcShow function on window scroll
    window.addEventListener("scroll", calcShow);

    // CleanUp function
    return () => window.removeEventListener("scroll", calcShow);
  }, []);

  return (
    <div
      className={`photo-card ${showClass && "show"}`}
      ref={photoEle}
      onClick={() => onPhotoClick(index, photo)}
    >
      <img src={photo.urls.small} alt="galleryImg" />
    </div>
  );
};

export default PhotoCard;
