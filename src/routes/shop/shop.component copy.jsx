import { useContext, Fragment } from "react";
import { CategoryContext } from "../../components/context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    //Fragment o <> </> para no añadir un div extra innecesario
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Fragment key={title}>
            <CategoryPreview title={title} products={products} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Shop;
