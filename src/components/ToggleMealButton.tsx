import React from "react";

interface IProps {
  handleToggleMeal: () => void;
  isMealInCart: boolean;
}

const ToggleMealButton: React.FC<IProps> = ({
  handleToggleMeal,
  isMealInCart,
}) => {
  return (
    <button onClick={handleToggleMeal} className="meals__card-button">
      {isMealInCart ? "remove from cart" : "add to cart"}
    </button>
  );
};

export default ToggleMealButton;
