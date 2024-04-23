import React from "react";

const Card = ({ name, gender, height }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-10 bg-slate-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{gender}</p>
          <p className="text-gray-700 text-base">{height}</p>
        </div>
      </div>
    );
  };
  
  export default Card;