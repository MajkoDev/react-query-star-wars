import { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const Planets = () => {
  const [page, setPage] = useState(2);

  const { status, data } = useQuery(["planets", { page }], async () => {
    const res = await fetch("http://swapi.dev/api/planets/?page=" + page);
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
        <h2>Planets</h2>
        <div className="btn">
          <button onClick={() => setPage(1)}>page 1</button>
          <button onClick={() => setPage(2)}>page 2</button>
          <button onClick={() => setPage(3)}>page 3</button>
        </div>
        {data.results.map((planet) => (
          <Planet key={planet.name} planet={planet} />
        ))}
      </div>
    );
  }
};

export default Planets;
