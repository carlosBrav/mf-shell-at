import "../../src/index.css";
import { ImagesHorizontal } from "../components/molecules/ImagesHorizontal";
import { usePrincipal } from "../hooks/use-pages/use-principal";
import { SearchModalPokemons } from "../pages/components/search-modal-pokemons";
import { BoxImage } from "../components/molecules/BoxImage";
import DarkIcon from "../assets/images/dark_mode_icon.png";
import LightIcon from "../assets/images/light_mode.png";

function Principal() {
  const {
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
    page,
    isLoadingPokemonLimits,
    pokemonsBy30,
    pokemonName,
    isDarkMode,
    handleClick,
    setPokemonName,
    setPage,
    setShowModal,
    handleGetDetail,
  } = usePrincipal();

  return (
    <div className="w-full h-full min-w-100 pl-10 pr-10 pt-4">
      <div className="flex flex-col gap-4">
        <div className="w-full h-10 flex flex-row items-center justify-center relative">
          <p>{user}</p>
          <div className="absolute right-0 h-10 w-10 cursor-pointer" onClick={handleClick}>
            {isDarkMode ? (
              <img
                style={{ width: 20, height: 20 }}
                src={LightIcon}
                alt="light"
                
              />
            ) : (
              <img
                style={{ width: 20, height: 20 }}
                src={DarkIcon}
                alt="dark"
              />
            )}
          </div>
        </div>
        <div className="mb-2 mt-2">
          <input
            className={`h-10 w-full bg-white text-gray-500 rounded-md pl-2 max-w-100 ${localStorage.theme === "dark" ? "" : "border-black border"}`}
            onFocus={() => setShowModal(true)}
          />
        </div>
        <ImagesHorizontal title={"Fuego"}>
          {isLoadingFire ? (
            <p>{"Cargando..."}</p>
          ) : (
            <div
              style={{
                display: "flex",
                gap: 12,
                overflowX: "auto",
                padding: "10px 20px", // espacio lateral para los botones
              }}
            >
              {dataFire &&
                dataFire.map((val: any, index: number) => (
                  <BoxImage
                    key={`poke-fire-${index}`}
                    source={val.url}
                    title={val.name}
                    onClick={() => handleGetDetail(val.name)}
                  />
                ))}
            </div>
          )}
        </ImagesHorizontal>

        <ImagesHorizontal title={"Agua"}>
          {isLoadingWater ? (
            <p>{"Cargando..."}</p>
          ) : (
            <div
              style={{
                display: "flex",
                gap: 12,
                overflowX: "auto",
                padding: "10px 20px", // espacio lateral para los botones
              }}
            >
              {dataWater &&
                dataWater.map((val: any, index: number) => (
                  <BoxImage
                    key={`poke-water-${index}`}
                    source={val.url}
                    title={val.name}
                    onClick={() => handleGetDetail(val.name)}
                  />
                ))}
            </div>
          )}
        </ImagesHorizontal>

        <ImagesHorizontal title={"Eléctrico"}>
          {isLoadingElectric ? (
            <p>{"Cargando..."}</p>
          ) : (
            <div
              style={{
                display: "flex",
                gap: 12,
                overflowX: "auto",
                padding: "10px 20px", // espacio lateral para los botones
              }}
            >
              {dataElectric &&
                dataElectric.map((val: any, index: number) => (
                  <BoxImage
                    key={`poke-electric-${index}`}
                    source={val.url}
                    title={val.name}
                    onClick={() => handleGetDetail(val.name)}
                  />
                ))}
            </div>
          )}
        </ImagesHorizontal>

        <ImagesHorizontal title={"Dragón"}>
          {isLoadingDragon ? (
            <p>{"Cargando..."}</p>
          ) : (
            <div
              style={{
                display: "flex",
                gap: 12,
                overflowX: "auto",
                padding: "10px 20px", // espacio lateral para los botones
              }}
            >
              {dataDragon &&
                dataDragon.map((val: any, index: number) => (
                  <BoxImage
                    key={`poke-dragon-${index}`}
                    source={val.url}
                    title={val.name}
                    onClick={() => handleGetDetail(val.name)}
                  />
                ))}
            </div>
          )}
        </ImagesHorizontal>

        <ImagesHorizontal title={"Fantasma"}>
          {isLoadingGhost ? (
            <p>{"Cargando..."}</p>
          ) : (
            <div
              style={{
                display: "flex",
                gap: 12,
                overflowX: "auto",
                padding: "10px 20px", // espacio lateral para los botones
              }}
            >
              {dataGhost &&
                dataGhost.map((val: any, index: number) => (
                  <BoxImage
                    key={`poke-ghost-${index}`}
                    source={val.url}
                    title={val.name}
                    onClick={() => handleGetDetail(val.name)}
                  />
                ))}
            </div>
          )}
        </ImagesHorizontal>
      </div>
      {showModal && (
        <SearchModalPokemons
          showModal={showModal}
          onClose={() => {
            setPage(1);
            setShowModal(false);
          }}
          getDetail={handleGetDetail}
          isLoading={isLoadingPokemonLimits}
          pokemons={pokemonsBy30}
          searchPokemon={pokemonName}
          setSearchPokemon={setPokemonName}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Principal;
