import CategoryFilter from "../components/CategoryFilter";
import { useState } from "react";
import NameFilter from "../components/NameFilter";
import MealListContainer from "../components/MealListContainer";

const Home = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="homepage">
      <NameFilter setName={setName} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <MealListContainer name={name} category={category} />
    </div>
  );
};

export default Home;
