import { Link } from "react-router-dom";
import { useState } from "react";
export default function Conference() {
  const [toggleItems, setToggleItems] = useState(false);
  const [showBlubs, setBlubs] = useState([]);
  return (
    <div className="grid grid-cols-2">
      <div>
        <div>
          <button type="button" className="bg-gray-100">
            Speaker
          </button>
        </div>
        <div>
          <button type="button" className="bg-gray-100">
            Sessions
          </button>
        </div>
        <div>
          <button type="button" className="bg-gray-100">
            Videos
          </button>
        </div>
        <div>
          <button type="button" className="bg-gray-100">
            Blog
          </button>
        </div>
      </div>
      {toggleItems && <div></div>}
    </div>
  );
}
