import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

// async function
const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  const { status, error, data } = useQuery("people", fetchPeople);
  console.log(data);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Something went wrong...</span>;
  }

  if (status === "success") {
    return (
      <div>
        <h2>People</h2>
        {data.results.map((people) => (
          <Person key={people.name} people={people} />
        ))}
      </div>
    );
  }
};

export default People;
