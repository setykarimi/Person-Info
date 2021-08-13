import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="topCard">
        <h4 className="name">{props.name}</h4>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.tell} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
