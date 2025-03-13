import { useEffect, useState } from "react";
import api from "../axios-config/axios";

export const useGetPokemonsByName = (name: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (name && name.length >2) {
      setIsLoading(true);
      api
        .get(`/api/v2/pokemon/${name}`)
        .then(async (res: any) => {
          if (res.data) {
            setData({
              name: res.data.species.name,
              url: res.data.sprites.other.dream_world.front_default
            })
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [name]);

  return {
    data,
    isLoading,
  };
};
