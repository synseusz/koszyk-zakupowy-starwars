import React from "react";
import { useQuery, gql } from "@apollo/client";

import Card from "./Card";

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

  return (
    <div className="starship-card-container">
      {data.allStarships.starships.map((starship, id) => (
        <Card
          key={id}
          name={starship.name}
          manufacturers={starship.manufacturers}
          price={starship.costInCredits}
        />
      ))}
    </div>
  );
}

export default Body;
