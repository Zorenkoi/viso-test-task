import React from "react";
import { IMeal } from "../interfaces";
import MealsCard, { MealsCardWithInstructions } from "./MealsCard";
import { toggleMeal } from "../store/cartSlice";
import { useAppDispatch } from "../store";
import useCart from "../hooks/useCart";

interface IProps {
  meals: IMeal[];
  showInstructions?: boolean;
}

const MealsList: React.FC<IProps> = ({ meals, showInstructions = false }) => {
  const dispatch = useAppDispatch();
  const { mealsFromCart } = useCart();

  return (
    <div className={`meals__list ${showInstructions && "show-instructions"}`}>
      {meals.map((meal) => {
        const handleToggleMeal = () => {
          dispatch(toggleMeal(meal));
        };
        const isMealInCart = mealsFromCart.some(
          ({ idMeal }) => idMeal === meal.idMeal
        );

        const mealCardProps = {
          handleToggleMeal,
          isMealInCart,
          ...meal,
        };

        if (showInstructions) {
          return (
            <MealsCardWithInstructions key={meal.idMeal} {...mealCardProps} />
          );
        }
        return <MealsCard key={meal.idMeal} {...mealCardProps} />;
      })}
    </div>
  );
};

export default MealsList;
