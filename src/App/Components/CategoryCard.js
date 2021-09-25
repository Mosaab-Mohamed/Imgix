const CategoryCard = ({ title, image }) => {
  return (
    <div className="category-card">
      <img className="category_image" src={image} alt="cover-thumbnail" />
      <div className="category_overlay"></div>
      <div className="category_content">
        <h5 className="category_name">{title}</h5>
        <button className="category_button">MORE PHOTOS</button>
      </div>
    </div>
  );
};

export default CategoryCard;
