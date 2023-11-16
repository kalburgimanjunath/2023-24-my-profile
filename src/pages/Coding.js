import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Routes, Route } from "react-router";

const Sidebar = () => {
  const menuitems = [
    { title: "Coding" },
    { title: "history" },
    { title: "company intos" },
    { title: "showcase" },
    { title: "sandbox" },
    { title: "Offers" },
  ];
  return (
    menuitems &&
    menuitems.map((item) => {
      return (
        <div className="p-2 mb-1 text-black hover:bg-gray-500 hover:cursor-pointer">
          <Link to={`../coding/:${item.title}`}>{item.title}</Link>
        </div>
      );
    })
  );
};
export default function Coding() {
  const { id } = useParams();
  return (
    <div className="mt-20 ml-0 grid grid-cols-2">
      <div className="fixed mt-15 pt-1 left-0 bottom-0 bg-gray-300 text-gray-100 top-0 w-3/2">
        <Sidebar />
      </div>
      <div className="m-20">{id}</div>
    </div>
  );
}
