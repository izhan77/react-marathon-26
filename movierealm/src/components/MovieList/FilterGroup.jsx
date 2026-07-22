import React from "react";

const FilterGroup = ({ handleActive, active }) => {
  const ratings = [8, 7, 6];

  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => (
        <li
          onClick={() => handleActive(rate)}
          className={
            active === rate ? "movie_filter_item active" : "movie_filter_item"
          }
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
