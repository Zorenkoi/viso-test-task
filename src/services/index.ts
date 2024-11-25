import axios from "axios";
import { ICategory, IMeal } from "../interfaces";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchAllMeals = async (): Promise<IMeal[]> => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const mealRequests = alphabet.map((letter) =>
    axios.get(`${BASE_URL}/search.php?f=${letter}`)
  );

  const mealsResponses = await Promise.all(mealRequests);

  const allMeals = mealsResponses
    .flatMap((response) => response.data.meals || [])
    .reduce((uniqueMeals: Record<string, IMeal>, meal: IMeal) => {
      uniqueMeals[meal.idMeal] = meal;
      return uniqueMeals;
    }, {});

  return Object.values(allMeals);
};

export const fetchMealsByCategory = async (
  category: string
): Promise<IMeal[]> => {
  const response = await axios.get<{ meals: IMeal[] }>(
    `${BASE_URL}/filter.php?c=${category}`
  );
  return response.data.meals;
};

export const fetchMealsByName = async (name: string): Promise<IMeal[]> => {
  if (name === "") {
    return await fetchAllMeals();
  }

  const response = await axios.get<{ meals: IMeal[] }>(
    `${BASE_URL}/search.php?s=${name}`
  );
  return response.data.meals;
};

export const fetchAllCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get<{ categories: ICategory[] }>(
    `${BASE_URL}/categories.php`
  );
  return response.data.categories;
};

export const fetchMealById = async (id: string): Promise<IMeal> => {
  const response = await axios.get<{ meals: IMeal[] }>(
    `${BASE_URL}/lookup.php?i=${id}`
  );
  return response.data.meals[0];
};
