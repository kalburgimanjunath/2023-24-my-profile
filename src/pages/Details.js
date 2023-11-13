import { useParams } from "react-router";
export default function Details({ title, profile, type }) {
  const { id } = useParams();
  const filterData =
    profile &&
    profile[type].filter((item) => {
      return item.id == id;
    });
  console.log(filterData);

  return <div className="m-20">{filterData[0].title}</div>;
}
