import React, { useState } from "react";
export default function Cards({ title, items, link }) {
  const [showDescription, setShowDescription] = useState(false);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(0);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(items.length);
  return (
    <div>
      <h1 className="font-bold text-2xl text-left ml-2">{title}</h1>
      <div className="overflow-x-auto flex">
        {items &&
          items.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <a
                  href=""
                  onMouseEnter={() => setShowDescription(true)}
                  onMouseLeave={() => setShowDescription(false)}
                  className="bg-white hover:text-blue-700 hover:bg-pink-100 border shadow-md rounded-lg m-2"
                >
                  {item.image && (
                    <div>
                      <img src={item.image} width={200} />
                    </div>
                  )}
                  <div className="p-2">
                    <div className="font-bold">{item.title}</div>
                    {showDescription && (
                      <div className="text-xs text-black-100">
                        {item.description}
                      </div>
                    )}
                  </div>
                </a>
              </React.Fragment>
            );
          })}
        <div>
          {current > count - 1 && <div>Previous</div>}
          <div>Current:{count}</div>
          {next < count - 1 && <div>Next</div>}
        </div>
      </div>
    </div>
  );
}
