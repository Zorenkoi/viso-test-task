import { useAppSelector } from "../store";

const useCart = () => {
  const mealsFromCart = useAppSelector((state) => state.cart);

  return { mealsFromCart };
};

export default useCart;
