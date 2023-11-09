import React from "react";
export default function Cards({ title, items, link }) {
  return (
    <div>
      <h1 className="font-bold text-2xl text-left ml-2">{title}</h1>
      <div className="overflow-x-auto flex">
        {items &&
          items.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <a href="" className="bg-white border-2 rounded-lg p-2 m-2 ">
                  <div>
                    <img
                      src="https://picsum.photos/seed/picsum/200/300"
                      width={200}
                    />
                  </div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </a>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}
