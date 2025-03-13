import { useCallback, useEffect, useState } from "react";
import api from "../axios-config/axios";
import axios from "axios";

export const useGetPokemonsByType = (type: string, quantity: number) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePokemones = useCallback(() => {
    if (type && quantity) {
      setIsLoading(true);
      api
        .get(`/api/v2/type/${type}/`)
        .then(async (res: any) => {
          if (res.data) {
            const { pokemon } = res.data;
            const pokemonTop10 =
              pokemon && pokemon.length > 0
                ? pokemon
                    .slice(0, quantity)
                    .map((val: any) => ({
                      name: val.pokemon.name,
                      url: val.pokemon.url,
                    }))
                : [];
            const pokemonSVG = await Promise.all(
              pokemonTop10.map((val: any) => axios.get(val.url))
            );
            setData(pokemonSVG.map((val: any) => ({
              name: val.data.species.name,
              url: val.data.sprites.other.dream_world.front_default
            })))
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [type, quantity])

  useEffect(() => {
    handlePokemones()
  }, []);

  return {
    data,
    isLoading,
  };
};
