import React from "react";

const FoodDisplay = ({ recipe }) => {
  return (
    <div className="grid place-items-center gap-4 bg-white rounded-lg border-[1px] border-[#6fa30d] shadow-[0_0_12px_rgb(0,0,0,0.3)] p-8">
      <h2 className="text-3xl font-bold">{recipe.label}</h2>
      <img
        src={recipe.images?.REGULAR?.url}
        alt={recipe.label}
        className="rounded-xl"
      />
      <p>{recipe.calories.toFixed(0)} kcal</p>
      <h2 className="font-semibold text-lg">Ingredients</h2>
      <ul className="w-full md:w-2/4 bg-[#f6fee7] p-4 rounded-lg text-center">
        {recipe.ingredients?.map((ingredient, index) => (
          <li
            className="list-disc list-inside"
            key={`${index}${ingredient.foodId}`}
          >
            {ingredient.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDisplay;
