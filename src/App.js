import React from "react";
import TopPart from "./TopPart";
import Card from "./Card";
import data from "./data";

const cards = data.map((item) => {
  return <Card item={item} />;
});

export default function App() {
  return (
    <div>
      <TopPart />
      {cards}
    </div>
  );
}
