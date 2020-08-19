import React from "react";

import { useQuery, gql } from "@apollo/client";

const ALL_STARSHIPS = gql`
  {
    allStarships {
      starships {
        id
        name
        manufacturers
        costInCredits
      }
    }
  }
`;

function Body() {
  const { loading, error, data } = useQuery(ALL_STARSHIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops... something went wrong while fetching data</p>;

//   console.log(data.allStarships.starships)

  return (
    <>
      {data.allStarships.starships.map((starship, id) => (
        <div className="starship-card" key={id}>
            <p><b>Name:</b> {starship.name}</p>
            <p><b>Manufacturers:</b> {starship.manufacturers}</p>
            <p><b>Cost:</b> {starship.costInCredits === null ? <p>UNAVAILABLE</p> : <p>{starship.costInCredits}</p>}</p>
        </div>
      ))}
    </>
  );
}

export default Body;
