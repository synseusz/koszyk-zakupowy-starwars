import React from "react";
import { useQuery, gql } from "@apollo/client";

import starships from "../starships";
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

// Example starships images
const starshipImages = starships.starshipImages;

const iterateImages = (name) => {
  for (let i = 0; i < starshipImages.length; i++) {
    const img = starshipImages[i].image;
    const starshipName = starshipImages[i].starshipName;

    if (starshipName === name) {
      return img;
    }
  }
};

function Body(props) {
  const { loading, error, data } = useQuery(ALL_STARSHIPS);

  if (loading) return <p className="popup-msg">Loading...</p>;
  if (error)
    return (
      <p className="popup-msg">
        Whoops... something went wrong while fetching the data
      </p>
    );

  return (
    <div className="starship-card-container">
      {data.allStarships.starships.map((starship, id) => (
        <Card
          key={id}
          image={iterateImages}
          itemsInCart={props.itemsInCart}
          itemsInCartArray={props.itemsInCartArray}
          name={starship.name}
          manufacturer1={starship.manufacturers[0]}
          manufacturer2={starship.manufacturers[1]}
          price={starship.costInCredits}
        />
      ))}
    </div>
  );
}

export default Body;
