import React from "react";
import { useQuery } from "react-query";

// async function
const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { status, error, data } = useQuery("planets", fetchPlanets);
  console.log(data);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Something went wrong...</span>;
  }

  if (status === "success") {
    return( <div>
        {data.results.map(planet => <div>{planet.name}</div>)}
    </div>)
  }

};

export default Planets;
