import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../services";
import { getIngredients } from "../utils/utils";
import IngredientsTable from "../components/IngredientsTable";
import { useAppDispatch } from "../store";
import ToggleMealButton from "../components/ToggleMealButton";
import { toggleMeal } from "../store/cartSlice";
import useCart from "../hooks/useCart";

const OneProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { mealsFromCart } = useCart();

  const {
    data: meal,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchMealById(id || ""),
    enabled: !!id,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError || !meal) return <h2>Error...</h2>;

  const ingredients = getIngredients(meal);

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
