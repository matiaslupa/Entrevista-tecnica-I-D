import React from 'react';
import {
  selectSearchTerm,
  selectSearchArray,
  setSearchTerm,
  clearSearchTerm,
  setSearchArray,
  selectLoading,
  isLoading
} from '../features/search/searchSlice';
import { useSelector, useDispatch } from 'react-redux';

function Search() {
  const searchTerm = useSelector(selectSearchTerm);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(isLoading());
    setTimeout(function(){
      dispatch(setSearchArray(searchTerm) );
    }, 3000);
    
    dispatch(clearSearchTerm());
  };

  const onChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
    
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <div className="flex">
        <div className="relative w-full ">
          <input
            value={searchTerm}
            onChange={onChange}
            type="search"
            id="search-dropdown"
            className="h-14 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="  ¿Qué estás buscando?"
          />
          <button
            type="submit"
            className="h-14 w-24 absolute flex items-center justify-around top-0 right-0 p-2  text-sm font-medium text-white bg-black rounded-r-lg border focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="mr-1">Buscar</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
