import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ width: props.width }}>
      {props.children}
    </div>
  );
};

export default Card;
