import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Pokemon } from "./pokemon";

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

export const Container = () => {
  const { data: { pokemons = [] } = {}, error, loading } = useQuery(
    GET_POKEMONS,
    {
      variables: { first: 14 }
    }
  );

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Loading ...${error.message}</p>;
  return (
    <div className="container">
      {pokemons.map(pokemon => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
};
