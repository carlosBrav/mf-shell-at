import { useEffect, useRef } from "react";
import { BoxImage } from "../../components/molecules/BoxImage";

type Props = {
  showModal: boolean;
  onClose: () => void;
  isLoading: boolean;
  pokemons: any;
  searchPokemon: string;
  setSearchPokemon: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  getDetail: (value: string) => void;
};

export const SearchModalPokemons = ({
  showModal = false,
  onClose,
  isLoading,
  pokemons,
  searchPokemon,
  setSearchPokemon,
  getDetail,
  page = 1,
  setPage,
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!showModal || !scrollRef.current || !loaderRef.current || isLoading)
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage(page + 1);
        }
      },
      {
        root: scrollRef.current,
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [showModal, isLoading]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="w-full h-full bg-white overflow-y-auto p-6 relative"
        ref={scrollRef}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          ×
        </button>
        {isLoading ? (
          <p>{"Cargando 30 pokemones..."}</p>
        ) : (
          
            <div className="w-full h-full gap-4 p-20">
              <input
                className="h-10 w-full max-w-100 bg-white text-gray-500 rounded-md pl-2 border border-black mb-10"
                value={searchPokemon}
                onChange={(event) => setSearchPokemon(event.target.value)}
              />
              <div className="flex flex-row gap-10 flex-wrap">
                {pokemons && pokemons.length > 0 && pokemons.map((val: any, index: number) => (
                  <BoxImage
                    key={`poke-limit-${index}`}
                    source={val.url}
                    title={val.name}
                    width={235}
                    height={235}
                    onClick={() => getDetail(val.name)}
                  />
                ))}
              </div>

              <div
                ref={loaderRef}
                className="text-center mt-4 text-gray-500 h-2"
              >
                Cargando más...
              </div>
            </div>
          
        )}
      </div>
    </div>
  );
};
