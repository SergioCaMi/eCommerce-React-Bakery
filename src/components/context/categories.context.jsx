// =====================================================
// CONTEXTO DE TIENDA
// =====================================================
// Mantiene la tienda actual accesible para toda la app.

import { createContext, useState, useEffect } from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils.js";

// Estado inicial del contexto
export const CategoryContext = createContext({
  categoriesMap: {},
});

// Proveedor del contexto
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };  
    getCategoriesMap();
  }, []);
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, [])  ; //Descomentar solo una vez para subir los datos a Firestore

  const value = { categoriesMap };
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>; //Creamos el proveedor del contexto con los productos cargados y todos sus hijos podrán acceder a ellos
};
