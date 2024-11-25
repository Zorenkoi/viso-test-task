import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../services";
import { getIngridients } from "../utils/utils";
import IngredientsTable from "../components/IngredientsTable";
import { useAppDispatch, useAppSelector } from "../store";
import ToggleMealButton from "../components/ToggleMealButton";
import { toggleMeal } from "../store/cartSlice";

const OneProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const mealsFromCart = useAppSelector((state) => state.cart);

  const { data: meal } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchMealById(id || ""),
  });

  if (!meal) return null;

  const ingredients = getIngridients(meal);

  const { strMealThumb, strMeal, strArea, strCategory, strInstructions } = meal;
  return (
    <>
      <div className="meal__grid">
        <img src={strMealThumb} alt={strMeal} className="meal__preview" />

        <div className="meal__details">
          <h1 className="meal__title">{strMeal}</h1>
          <h2 className="meal__subtitle">{strArea}</h2>
          <h2 className="meal__subtitle">{strCategory}</h2>

          <ToggleMealButton
            handleToggleMeal={() => dispatch(toggleMeal(meal))}
            isMealInCart={mealsFromCart.some(
              ({ idMeal }) => idMeal === meal.idMeal
            )}
          />
          <p>{strInstructions}</p>
        </div>
      </div>

      <IngredientsTable ingredients={ingredients} />
    </>
  );
};

export default OneProduct;
