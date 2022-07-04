import { useState } from "react";
import { useQuery, usePaginationQuery } from "react-query";
import Person from "./Person";

const People = () => {
  const [page, setPage] = useState(1);

  const { status, data } = useQuery(["people", { page }], async () => {
    const res = await fetch("http://swapi.dev/api/people/?page=" + page);
    return res.json();
  });

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
        <div className="btn">
          <button onClick={() => setPage(1)}>page 1</button>
          <button onClick={() => setPage(2)}>page 2</button>
          <button onClick={() => setPage(3)}>page 3</button>
        </div>
        {data.results.map((people) => (
          <Person key={people.name} people={people} />
        ))}
      </div>
    );
  }
};

export default People;
