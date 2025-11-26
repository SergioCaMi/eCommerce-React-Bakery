import "./categories.styles.scss";
import CategoryItem from "./components/category-item/category-item.component";
function App() {
  const categories = [
    {
      id: 1,
      title: "Bollería Dulce",
      img: "./images/dulce.png",
    },
    {
      id: 2,
      title: "Bollería Salada",
      img: "./images/salada.png",
    },
    {
      id: 3,
      title: "Panadería Industrial",
      img: "./images/panaderia.png",
    },
    {
      id: 4,
      title: "Productos de Temporada",
      img: "./images/temporada.png",
    },
    {
      id: 5,
      title: "Productos Especiales",
      img: "./images/especiales.png",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={ category } />
      ))}
    </div>
  );
}

export default App;

// <div class="category-container">
//   {/* <img></img> */}
//   <div className="category-body-container">
//     <h2>Bollería Dulce</h2>
//     <p>Comprar ahora!</p>
//   </div>
// </div>
// <div class="category-container">
//   {/* <img></img> */}
//   <div className="category-body-container">
//     <h2>Bollería Salada</h2>
//     <p>Comprar ahora!</p>
//   </div>
// </div>
// <div class="category-container">
//   {/* <img></img> */}
//   <div className="category-body-container">
//     <h2>Panadería Industrial</h2>
//     <p>Comprar ahora!</p>
//   </div>
// </div>
// <div class="category-container">
//   {/* <img></img> */}
//   <div className="category-body-container">
//     <h2>Productos de Temporada</h2>
//     <p>Comprar ahora!</p>
//   </div>
// </div>
// <div class="category-container">
//   {/* <img></img> */}
//   <div className="category-body-container">
//     <h2>Snacks y Mini Bollería</h2>
//     <p>Comprar ahora!</p>
//   </div>
// </div>
// <div class="category-container">
//   {/* <img></img> */}
//   <div className="category-body-container">
//     <h2>Productos Especiales</h2>
//     <p>Comprar ahora!</p>
//   </div>
// </div>
