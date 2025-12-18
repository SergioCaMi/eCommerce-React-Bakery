import "./directory-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { img, title } = category;
  return (
    <div className="category-container">
      {/* <img src={img} alt={title}></img> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Comprar ahora!</p>
      </div>
    </div>
  );
};

export default CategoryItem;
