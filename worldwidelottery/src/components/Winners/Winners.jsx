import React from "react";
import "./Winners.scss";
function Winners() {
  return (
    <div className="winners">
      <div className="winners__container">
        <h2>Winners</h2>
        <ul>
          <li>Winner 1</li>
          <li>Winner 2</li>
          <li>Winner 3</li>
          <li>Winner 4</li>
        </ul>
        <div className="winners__container-sort">
          <button>Sort</button>
        </div>
      </div>
    </div>
  );
}
export default Winners;
