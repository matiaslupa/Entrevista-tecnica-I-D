import React from 'react';
import { motion } from 'framer-motion';

function ProductCard(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      className="flex mb-10 cursor-pointer w-full lg:w-[450px] hover:bg-gray-200 rounded-lg"
    >
      <img
        src={props.product.images[0]}
        alt=""
        className="max-w-[128px] rounded-lg shadow-[0px_1px_4px_rgba(52,52,52,0.25)]"
      />
      <div className="flex flex-col flex-wrap ml-5">
        <h3 className="mt-5 ">{props.product.title}</h3>
        <span className="text-sm text-gray-400">CODE{props.product.id}</span>
        <br />
        <span>
          <span className="text-sm text-gray-400">Precio:</span>{' '}
          <span className="font-semibold">${props.product.price}</span>
        </span>
      </div>
    </motion.div>
  );
}

export default ProductCard;
