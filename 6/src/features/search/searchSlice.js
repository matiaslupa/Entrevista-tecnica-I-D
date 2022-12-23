import { createSlice } from '@reduxjs/toolkit'
import products from '../../api/products.json'


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: "",
    searchArray: [],
    productsArray: products.products,
    loading: false,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    setSearchArray: (state, action) => {
      state.searchArray.push(action.payload);

      state.productsArray = state.productsArray.filter((item) => item.title.includes(action.payload.toUpperCase()) || item.id.includes(action.payload));
      state.loading = false;
    },
    deleteTagArray: (state, action) => {
      state.searchArray = state.searchArray.filter((item) => item !== action.payload);
      state.productsArray = products.products;
      
    },
    isLoading: (state) => {
      state.loading = true;
    },
    isNotLoading: (state) => {
      state.loading = false;
    }
  },
})


export const selectSearchTerm = (state) => state.search.searchTerm;

export const selectSearchArray = (state) => state.search.searchArray;

export const selectProductsArray = (state) => state.search.productsArray;

export const selectLoading = (state) => state.search.loading;

export const { setSearchTerm, clearSearchTerm, setSearchArray, deleteTagArray, isLoading, isNotLoading } = searchSlice.actions

export default searchSlice.reducer