import { Link } from "react-router-dom";
import IngredientsTable from "../components/IngredientsTable";
import MealsList from "../components/MealsList";
import { IIngredient } from "../interfaces";
import { getIngredients } from "../utils/utils";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { mealsFromCart } = useCart();

  const allIngredients = mealsFromCart.reduce<IIngredient[]>(
    (acc, meal) => [...acc, ...getIngredients(meal)],
    []
  );

  const consolidatedIngridients = consolidateIngredients(allIngredients);

  if (mealsFromCart.length === 0) {
    return (
      <>
        <h3>Cart is empty</h3>
        <Link to="/">Go to Main page</Link>
      </>
    );
  }

  return (
    <div className="cartpage">
      <MealsList meals={mealsFromCart} showInstructions={true} />

      <IngredientsTable ingredients={consolidatedIngridients} />
    </div>
  );
};

function consolidateIngredients(ingredients: IIngredient[]): IIngredient[] {
  const ingredientMap: Record<string, string> = {};

  ingredients.forEach(({ ingredient, measure }) => {
    if (ingredientMap[ingredient]) {
      ingredientMap[ingredient] += `, ${measure}`;
    } else {
      ingredientMap[ingredient] = measure;
    }
  });

  return Object.entries(ingredientMap).map(([ingredient, measure]) => ({
    ingredient,
    measure,
  }));
}

export default Cart;
