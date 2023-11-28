import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Routes, Route } from "react-router";
import Problem1 from "../codesamples/Problem1";
import Problem2 from "../codesamples/Problem2";
import Problem3 from "../codesamples/Problem3";
import Problem4 from "../codesamples/Problem4";
import Problem5 from "../codesamples/Problem5";
import Problem6 from "../codesamples/Problem6";
import Problem7 from "../codesamples/Problem7";
import Problem8 from "../codesamples/Problem8";

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
    <div className="mt-20 ml-0 grid grid-cols-2 overflow-auto">
      <div className="fixed mt-15 pt-1 left-0 bottom-0 bg-gray-300 text-gray-100 top-0 w-3/2">
        <Sidebar />
      </div>
      <div className="ml-20 w-screen border-2">
        {id}
        <Problem8 />
        <Problem7 />
        <Problem6 />
        <Problem5 />
        <Problem4 />
        <Problem3 />
        {/* <Problem2 /> */}
        <Problem1 />
        {/* <iframe
          src="https://codesandbox.io/p/github/kalburgimanjunath/next-sandbox/main?embed=1&showConsole=true"
          style={{
            width: "100%",
            height: "500px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="kalburgimanjunath/next-sandbox/main"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe> */}
      </div>
    </div>
  );
}
