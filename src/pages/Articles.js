import { Cards } from "../components";
import { useState, useEffect } from "react";
const config = {
  base: "appbY4RWnMNd4hWUB",
  table: "Articles",
  apiKey: "keyeNXyxxuuYJY19w",
  view: "Grid view",
  maxRecords: 3,
};
const request = new Request(
  `https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}`,
  {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${config.apiKey}`,
    }),
  },
);

export default function Articles({ title, profile }) {
  const [articles, setArticles] = useState([]);
  const headers = "Authorization: Bearer appbY4RWnMNd4hWUB";
  // const loadArticles = async () => {
  //   const request = new Request(
  //     `https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}`,
  //     {
  //       method: "get",
  //       headers: new Headers({
  //         Authorization: `Bearer ${config.apiKey}`,
  //       }),
  //     },
  //   );
  //   var resp = await fetch(request).catch((err) => {
  //     console.log(err);
  //   });
  //   if (resp.status >= 200 && resp.status < 300) {
  //     var json = await resp.json();
  //     const { records } = json;
  //     setArticles({ records });
  //   }
  // };
  // useEffect(() => {
  //   loadArticles();
  // }, []);
  return (
    <div className="m-20 w-full">
      <Cards title="Articles" items={profile.articles} />
      {/* {articles && articles["records"] && articles["records"].length > 0 ? ( */}
      {/* <Cards title="Articles" items={articles["records"]} /> */}
      {/* ) : (
        "no items found"
      )} */}
    </div>
  );
}
