import React from "react";
import { IIngredient } from "../interfaces";

interface IProps {
  ingredients: IIngredient[];
}

const IngredientsTable: React.FC<IProps> = ({ ingredients }) => {
  return (
    <table className="ingredients__table">
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measurement</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map(({ ingredient, measure }, index) => (
          <tr key={index}>
            <td>{ingredient}</td>
            <td>{measure}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsTable;
