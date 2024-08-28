import React, { useEffect, useState } from "react";
import FoodDisplay from "./Components/FoodDisplay";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  async function fetchy(search = "", url) {
    try {
      const endpoint =
        url ||
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=527616b9&app_key=3ad2eaa989c6d1f75b1615524c3ee881%20%09`;
      const response = await fetch(endpoint);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch(e) {
    if ((search && e.type === "click") || e.key === "Enter") {
      fetchy(search);
      setSearch("");
    }
  }

  useEffect(() => {
    fetchy(
      undefined,
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=527616b9&app_key=3ad2eaa989c6d1f75b1615524c3ee881&dishType=Main%20course&random=true"
    );
  }, []);

  return (
    <div className="text-black grid place-items-center gap-8">
      <div className="mt-8 w-2/3 flex justify-center items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 flex-grow"
          placeholder="Search for a recipe"
          onKeyDown={handleSearch}
        />
        <button
          className="button-update px-3 py-2 bg-[#8dcc16] hover:bg-[#a8e635] active:scale-x-110 active:scale-y-90 transition-all duration-[5ms] shadow-md rounded-md font-semibold"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid gap-8">
        {data.hits?.length > 0 ? (
          data.hits?.map((item, index) => (
            <FoodDisplay
              recipe={item.recipe}
              key={`${item.recipe.label}${index}`}
            />
          ))
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
};

export default App;
