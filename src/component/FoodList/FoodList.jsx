import { useState } from "react";
import "./FoodList.css";

import FoodCard from "../FoodCard/FoodCard";
import { foods } from "../../data";

function FoodList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFoods = foods.filter((food) => {
    const searchMatch = food.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      food.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <>
<div className="categories-filter">
  <button onClick={() => setCategory("All")}>
    All
  </button>

  <button onClick={() => setCategory("breakfast")}>
    Breakfast
  </button>

  <button onClick={() => setCategory("lunch")}>
    Lunch
  </button>

  <button onClick={() => setCategory("shakes")}>
    Shakes
  </button>
</div>

      <div className="food-list">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="foods">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodList;