import React from 'react';
import {deleteTagArray,isLoading, isNotLoading} from '../features/search/searchSlice';
import {  useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

function Tag(props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteTagArray(props.item));
    dispatch(isLoading());
    setTimeout(function(){
      dispatch(isNotLoading());
    }, 3000);
  };
  return (
    <motion.div 
    whileHover={{ scale: 1.04 }}
    className="h-5 flex justify-center items-center bg-black rounded-md py-3 pl-2 mr-1">
      <span className="text-white">
        {props.item}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-white cursor-pointer ml-2 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={onClick}
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </motion.div>
  );
}

export default Tag;
