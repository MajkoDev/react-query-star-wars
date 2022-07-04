import React from "react";
import { useQuery } from "react-query";


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
        
      </div>
    );
  }
};

export default People;
