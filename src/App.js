import React from "react";
import { useState } from "react";
import bulma from "bulma/css/bulma.css";
import AnimalShow from "./AnimalShow";

function getrandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getrandomAnimal());

function App() {
  
  const [animals, setAnimals] = useState([]);
 
  
  const handleClick = () => {
    
    setAnimals([...animals, getrandomAnimal()]);

  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="App">
      <h1 className="title has-text-centered">Animal Show List </h1>
    <div className="has-text-centered">  <button type="button " onClick={handleClick} className="button is-primary is-large has-text-centered">Add Animal</button></div>
    <h1 className="title has-text-centered m-6">{renderedAnimals}</h1>
      {/* <h1 className="title has-text-centered"> Number of animals: {count}</h1> */}
      {/* <AnimalShow animal={{ type: "cat" }} /> */}
    </div>
  );
}

export default App;
