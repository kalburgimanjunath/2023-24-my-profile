import { useParams } from "react-router";
export default function Details({ title, profile, type }) {
  const { id } = useParams();
  const filterData =
    profile &&
    profile[type].filter((item) => {
      return item.id == id;
    });
  const CardDetail = ({ data }) => {
    return (
      <div>
        <div>
          <img src={data.image} />
        </div>
        <div className="font-bold">{data.title}</div>
        <div>{data.description}</div>
      </div>
    );
  };
  return (
    <div className="m-20">
      {filterData && filterData[0].title ? (
        <CardDetail data={filterData[0]} />
      ) : (
        "no records found"
      )}
    </div>
  );
}
