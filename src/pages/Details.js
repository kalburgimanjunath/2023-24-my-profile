import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/features/counterSlice";

export default function Details({ title, profile, type }) {
  const { id } = useParams();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
        <div>Likes{count}</div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
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
