import React from "react";
import { Link } from "react-router-dom";
import { IMeal } from "../interfaces";
import ToggleMealButton from "./ToggleMealButton";

interface IProps extends IMeal {
  handleToggleMeal: () => void;
  isMealInCart: boolean;
}

const MealsCard: React.FC<IProps> = ({
  idMeal,
  strMealThumb,
  strMeal,
  handleToggleMeal,
  isMealInCart,
  strCategory,
  strArea,
}) => {
  return (
    <div className="meals-card" key={idMeal}>
      <Link to={`/${idMeal}`} className="meals-card__thumb-container">
        <img
          className="meals-card__thumb"
          src={strMealThumb + "/preview"}
          alt={strMeal}
        />
      </Link>
      <div className="meals-card__info">
        <Link to={`/${idMeal}`} className="meals-card__title">
          <h3>{strMeal}</h3>
        </Link>
        <h4>Country: {strArea}</h4>
        <h4>Category: {strCategory}</h4>
      </div>

      <ToggleMealButton
        handleToggleMeal={handleToggleMeal}
        isMealInCart={isMealInCart}
      />
    </div>
  );
};

export const MealsCardWithInstructions: React.FC<IProps> = ({
  idMeal,
  strMealThumb,
  strMeal,
  handleToggleMeal,
  isMealInCart,
  strCategory,
  strArea,
  strInstructions,
}) => {
  return (
    <div className="meals-card show-instructions" key={idMeal}>
      <Link to={`/${idMeal}`} className="meals-card__thumb-container">
        <img
          className="meals-card__thumb"
          src={strMealThumb + "/preview"}
          alt={strMeal}
        />
      </Link>
      <div className="meals-card__info">
        <Link to={`/${idMeal}`} className="meals-card__title">
          <h3>{strMeal}</h3>
        </Link>
        <h4>Country: {strArea}</h4>
        <h4>Category: {strCategory}</h4>
        <p>{strInstructions}</p>
        <ToggleMealButton
          handleToggleMeal={handleToggleMeal}
          isMealInCart={isMealInCart}
        />
      </div>
    </div>
  );
};

export default MealsCard;
