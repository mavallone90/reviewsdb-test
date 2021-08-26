import React from "react";

function Review(props) {
  return (
    <>
      <p>
        {props.film} {props.year}
      </p>
      <p>Dir. {props.director}</p>
    </>
  );
}

export default Review;
