import React from "react";

const PokeCard = ({ pokeData }) => {
  const getTypeGradient = (type) => {
    const gradients = {
      normal: "from-gray-400 to-gray-600",
      fire: "from-red-500 to-orange-600",
      water: "from-blue-400 to-blue-600",
      electric: "from-yellow-300 to-yellow-500",
      grass: "from-green-400 to-green-600",
      ice: "from-cyan-300 to-blue-400",
      fighting: "from-red-600 to-red-800",
      poison: "from-purple-500 to-purple-700",
      ground: "from-yellow-600 to-yellow-800",
      flying: "from-indigo-300 to-blue-400",
      psychic: "from-pink-400 to-purple-600",
      bug: "from-lime-400 to-green-600",
      rock: "from-yellow-700 to-gray-700",
      ghost: "from-purple-600 to-indigo-800",
      dragon: "from-indigo-500 to-purple-700",
      dark: "from-gray-700 to-black",
      steel: "from-gray-400 to-gray-600",
      fairy: "from-pink-300 to-pink-500",
    };
    return gradients[type] || gradients.normal;
  };

  const primaryType = pokeData.types[0]?.type.name || "normal";
  const gradient = getTypeGradient(primaryType);

  return (
    <div className="bg-slate-900 border-2 border-gray-800 rounded-3xl overflow-hidden">
      {/* Top Section Pokemon Image */}
      <div className={`bg-linear-to-br ${gradient} p-6 relative`}>
        <div className="flex justify-center items-center h-40">
          <img
            src={
              pokeData.sprites.other.dream_world.front_default ||
              pokeData.sprites.front_default
            }
            alt={pokeData.name}
            className="w-32 h-32 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-5">
        {/* Pokemon Name */}
        <h2 className="text-2xl font-black text-white capitalize text-center mb-3 tracking-wide">
          {pokeData.name}
        </h2>

        {/* Types */}
        <div className="flex gap-2 justify-center mb-4">
          {pokeData.types.map((t, index) => (
            <div
              key={index}
              className={`bg-linear-to-r ${getTypeGradient(t.type.name)} px-4 py-1 rounded-full `}
            >
              <span className="text-white font-bold text-xs uppercase tracking-wider">
                {t.type.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
            <span className="text-red-400 font-bold text-sm">HP</span>
            <div className="flex items-center gap-2">
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-red-500 to-pink-500 h-2 rounded-full"
                  style={{
                    width: `${Math.min((pokeData.stats[0].base_stat / 255) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <span className="text-white font-bold text-sm w-8">
                {pokeData.stats[0].base_stat}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
            <span className="text-orange-400 font-bold text-sm">Attack</span>
            <div className="flex items-center gap-2">
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-orange-500 to-red-500 h-2 rounded-full"
                  style={{
                    width: `${Math.min((pokeData.stats[1].base_stat / 190) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <span className="text-white font-bold text-sm w-8">
                {pokeData.stats[1].base_stat}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
            <span className="text-blue-400 font-bold text-sm">Defence</span>
            <div className="flex items-center gap-2">
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                  style={{
                    width: `${Math.min((pokeData.stats[2].base_stat / 230) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <span className="text-white font-bold text-sm w-8">
                {pokeData.stats[2].base_stat}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
            <span className="text-yellow-400 font-bold text-sm">Speed</span>
            <div className="flex items-center gap-2">
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                  style={{
                    width: `${Math.min((pokeData.stats[5].base_stat / 200) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <span className="text-white font-bold text-sm w-8">
                {pokeData.stats[5].base_stat}
              </span>
            </div>
          </div>
        </div>

        {/* Height & Weight */}
        <div className="flex gap-2">
          <div className="flex-1 bg-gray-800 rounded-lg p-2 text-center border border-gray-700">
            <p className="text-gray-400 text-xs font-semibold mb-1">HEIGHT</p>
            <p className="text-white font-bold text-sm">
              {(pokeData.height / 10).toFixed(1)}m
            </p>
          </div>
          <div className="flex-1 bg-gray-800 rounded-lg p-2 text-center border border-gray-700">
            <p className="text-gray-400 text-xs font-semibold mb-1">WEIGHT</p>
            <p className="text-white font-bold text-sm">
              {(pokeData.weight / 10).toFixed(1)}kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
