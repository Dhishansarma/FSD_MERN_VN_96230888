import React from "react";

const Sam3 = () => {
  const obj = [
    { name: "Dhish",age: 21,city: "Chennai"},
    { name: "Mouli",age: 23,city: "Covai"},
    { name: "Vijay",age: 24,city: "Covai"},
  ];
  return (
    <div>
      {obj.map((detail) => {
        return <h1>My name is{detail.name}, 
        Age is {detail.age},
         i am from {detail.city}</h1>;
      })}
    </div>
  );
};

export default Sam3;
