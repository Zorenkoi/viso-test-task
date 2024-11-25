import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMeal } from "../interfaces";

type CartState = IMeal[];

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartState,
  reducers: {
    toggleMeal: (state, action: PayloadAction<IMeal>) => {
      const mealIndex = state.findIndex(
        (meal) => meal.idMeal === action.payload.idMeal
      );

      if (mealIndex !== -1) {
        state.splice(mealIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { toggleMeal } = cartSlice.actions;
export default cartSlice.reducer;
