import { useEffect, useRef, useState } from "react";
import { useAppStore } from "../../store/use-app-store";
import { useGetPokemonsByType } from "../../api/endpoints/get-pokemons-by-type";
import { useGetPokemonLimits } from "../../api/endpoints/get-pokemons-limits";
import { useGetPokemonsByName } from "../../api/endpoints/get-pokemons-by-name";
import { useHandleDarkMode } from "../use-handle-dark-mode";
import {useNavigate} from 'react-router-dom'

const MAX_PAGES = 30

export const usePrincipal = () => {
  const navigate = useNavigate()
  const [pokemonName, setPokemonName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemonsBy30, setPokemonsBy30] = useState<any>([]);
  const [page, setPage] = useState<number>(0)
  const refHasMore =  useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const {handleClick, isDarkMode} = useHandleDarkMode()
  const { isLoading: isLoadingFire, data: dataFire } = useGetPokemonsByType(
    "fire",
    10
  );
  const { isLoading: isLoadingWater, data: dataWater } = useGetPokemonsByType(
    "water",
    10
  );
  const {
    isLoading: isLoadingElectric,
    data: dataElectric,
  } = useGetPokemonsByType("electric", 10);
  const { isLoading: isLoadingDragon, data: dataDragon } = useGetPokemonsByType(
    "dragon",
    10
  );
  const { isLoading: isLoadingGhost, data: dataGhost } = useGetPokemonsByType(
    "ghost",
    10
  );

  const { user, setPokemonNameDetail} = useAppStore();

  const handleGetDetail = (name: string) => {
    console.log('name ', name)
    setPokemonNameDetail(name)
    navigate("/detail")
  }

  const {
    data: pokemonWithLimits,
    isLoading: isLoadingPokemonLimits,
  } = useGetPokemonLimits((page+1)*MAX_PAGES, showModal, pokemonName.length > 0);

  const {
    isLoading: isLoadingPokemonByName,
    data: pokemonsByName,
  } = useGetPokemonsByName(pokemonName);

  useEffect(() => {
    if (pokemonWithLimits && pokemonWithLimits.length > 0) {
      setPokemonsBy30((old: any) => [...old, ...pokemonWithLimits]);
    }
  }, [pokemonWithLimits]);

  useEffect(() => {
    if (pokemonsByName) {
      setPokemonsBy30([pokemonsByName]);
    }
  }, [pokemonsByName]);

  useEffect(() => {
    if (
      pokemonName.length === 0 &&
      pokemonWithLimits &&
      pokemonWithLimits.length > 0
    ) {
      setPokemonsBy30([...pokemonWithLimits]);
    }
  }, [pokemonName, pokemonWithLimits]);

  return {
    showModal,
    isLoadingFire,
    dataFire,
    isLoadingWater,
    dataWater,
    isLoadingElectric,
    dataElectric,
    isLoadingDragon,
    dataDragon,
    isLoadingGhost,
    dataGhost,
    user,
    pokemonWithLimits,
    isLoadingPokemonLimits,
    isLoadingPokemonByName,
    pokemonsByName,
    pokemonName,
    pokemonsBy30,
    refHasMore,
    scrollRef,
    targetRef,
    page,
    isDarkMode,
    handleClick,
    setPage,
    setPokemonName,
    setShowModal,
    handleGetDetail
  };
};
