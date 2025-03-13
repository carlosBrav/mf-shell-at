import { useCallback, useEffect, useState } from "react";
import api from "../axios-config/axios";
import axios from "axios";

export const useGetPokemonLimits = (
  end: number,
  call: boolean,
  searching: boolean
) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePokemonLimits = useCallback(() => {
    if (call && !searching) {
      setTimeout(() => {
        setIsLoading(true);
        api
          .get(`/api/v2/pokemon?limit=${end}&offset=0`)
          .then(async (res: any) => {
            if (res.data) {
              const pokemonUrls = res.data.results.map((val: any) => val.url);
              const pokemonSVG = await Promise.all(
                pokemonUrls.map((val: any) => axios.get(val))
              );
              setData(
                pokemonSVG.map((val: any) => ({
                  name: val.data.species.name,
                  url: val.data.sprites.other.dream_world.front_default,
                }))
              );
              setIsLoading(false);
            }
          })
          .catch((err) => {
            setIsLoading(false);
            console.error(err);
          });
      }, 2000);
    }
  }, [call, end, searching]);

  useEffect(() => {
    handlePokemonLimits();
  }, [handlePokemonLimits]);

  return {
    data,
    isLoading,
  };
};
