import React, { Suspense } from "react";
import { useAppStore } from "../store/use-app-store";
import {useNavigate} from 'react-router-dom'

const PageMF1 = React.lazy(() =>
    import("mf1/Page").then((mod) => ({ default: mod.default }))
  );
  
export const DetailPokemon = () => {
  const navigate = useNavigate()
  const {pokemonNameDetail} = useAppStore()
  const backToHome = () => {
    navigate("/principal")
  }
  const goToHistorical = () => {
    navigate("/historical")
  }
  
  return (
    <Suspense fallback={<div>Cargando microfrontend...</div>}>
      <PageMF1 pokemonname={pokemonNameDetail} goToHistorical={goToHistorical} back={backToHome}/>
    </Suspense>
  );
};

