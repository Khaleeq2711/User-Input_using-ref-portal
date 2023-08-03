import React from "react";

const Output = (props) => {
  return (
    <div className="userData">
      <p>
        <b>
          {props.name} ({props.age} Years Old)
        </b>
      </p>
    </div>
  );
};

export default Output;
