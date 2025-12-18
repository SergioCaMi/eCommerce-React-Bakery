import "./categories-container.styles.scss";
import CategoryItem from "../directory-item/directory-item.component";

const CategoryContainer = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
