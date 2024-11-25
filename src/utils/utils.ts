import { IIngredient, IMeal } from "../interfaces";

export function getIngredients(meal: IMeal): IIngredient[] {
  const ingredients: IIngredient[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = (meal as any)[`strIngredient${i}`] as string | undefined;
    const measure = (meal as any)[`strMeasure${i}`] as string | undefined;

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure: measure || "" });
    }
  }

  return ingredients;
}

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
