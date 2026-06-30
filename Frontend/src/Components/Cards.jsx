import React from "react";

function Cards({ item }) {
  return (
    <div className="p-2">
      <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-lg hover:shadow-2xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700 rounded-xl">
        <figure className="p-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-56 w-full object-contain"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            <span className="text-lg">{item.name}</span>

            <span className="badge badge-secondary bg-blue-500 border-none text-white">
              {item.category}
            </span>
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.description}
          </p>

          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline text-lg font-semibold">
              ${item.price}
            </div>

            <button className="btn btn-primary btn-sm rounded-full">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
