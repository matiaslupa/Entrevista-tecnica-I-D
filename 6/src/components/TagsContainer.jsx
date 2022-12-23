import React from 'react';
import Tag from './Tag';
import { selectSearchArray } from '../features/search/searchSlice';
import { useSelector } from 'react-redux';

function TagsContainer() {
  const searchArray = useSelector(selectSearchArray);
  

  return (
    <div className=" h-24 flex flex-wrap items-center">
      { searchArray.map((item, index) => <Tag item={item} key={index} />)}
    </div>
  );
}

export default TagsContainer;
