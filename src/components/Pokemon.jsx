import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";

const Pokemon = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayPokemon, setDisplayPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Get 100 random pokemon from the full list
  const getRandomPokemon = (pokemonList) => {
    const shuffled = [...pokemonList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 100);
  };

  async function fetchpokemon() {
    try {
      setLoadingProgress(10);

      // Fetch 1000 pokemon
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1000",
      );
      setLoadingProgress(30);

      const total = res.data.results.length;
      let completed = 0;

      const detailedData = res.data.results.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        completed++;
        // Update progress from 30% to 90% based on completion
        setLoadingProgress(30 + Math.floor((completed / total) * 60));
        return res.data;
      });

      const detailedRes = await Promise.all(detailedData);
      setLoadingProgress(95);

      setAllPokemon(detailedRes);
      setDisplayPokemon(getRandomPokemon(detailedRes));

      setLoadingProgress(100);
      setTimeout(() => setLoading(false), 300);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchpokemon();
  }, []);

  // Search across all 1000 pokemon
  const searchData =
    search.trim() === ""
      ? displayPokemon
      : allPokemon.filter((currPoke) => {
          return currPoke.name.toLowerCase().includes(search.toLowerCase());
        });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Progress Bar Container */}
          <div className="mb-6">
            <h1
              className='text-xl font-bold text-transparent bg-clip-text bg-linear-to-r 
                        from-yellow-400 via-red-500 to-pink-500" text-center mb-5'
            >
              PLEASE WAIT
            </h1>
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden ">
              <div
                className="bg-linear-to-r from-pink-500 via-red-500 to-orange-500 
                            h-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Percentage Text */}
          <div className="text-center">
            <h1
              className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r 
                        from-yellow-400 via-red-500 to-pink-500"
            >
              {loadingProgress}%
            </h1>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-red-900 border-2 border-red-500 rounded-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-red-200 mb-2">
            Error Loading Pokemon
          </h1>
          <p className="text-red-300">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Navbar */}
      <nav className="bg-linear-to-r from-yellow-400 via-red-500 to-pink-500 sticky top-0 z-50">
        <div className="bg-[#0f0f0f] bg-opacity-90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left */}
              <h1
                className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r 
                            from-yellow-400 via-red-500 to-pink-500"
              >
                POKEVAULT
              </h1>

              {/* Center Search */}
              <div className="w-full md:w-auto md:flex-1 md:max-w-xl md:mx-8">
                <input
                  type="text"
                  placeholder="Search Pokemon..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-6 py-3 text-base bg-gray-900 text-white placeholder-gray-500 border-2
                             border-yellow-400 rounded-full focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Right */}
              <div className="hidden md:block w-32"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Pokemon Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {searchData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 font-bold">No Pokémon Found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchData.map((currentPokemon) => {
              return (
                <PokeCard key={currentPokemon.id} pokeData={currentPokemon} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
