import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.item.imageUrl} />
      <div className="card--allText">
        <div className="card--location">
          <h3>{props.item.location}</h3>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card--bot">
          <h1>{props.item.title}</h1>
          <h3>
            {props.item.startDate} - {props.item.endDate}
          </h3>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
