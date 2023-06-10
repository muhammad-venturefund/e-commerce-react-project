import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "../context/ProductContext";
import reducer from "../reducer/filterReducer";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  list_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category:"all",
    company:"all",
    color:"all"
  },
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const gridViewHandler = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const sorting = (event) => {
    let userSortValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userSortValue });
  };

  // Update filter search

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({type:'UPDATE_FILTER_VALUE', payload:{name, value}})
  };

  useEffect(() => {
    dispatch({type:'FILTER_PRODUCTS'})
    dispatch({ type: "SORTING_PRODUCT", payload: products });
  }, [state.sorting_value, products, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, gridViewHandler, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
