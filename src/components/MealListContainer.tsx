import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchMealsByName } from "../services";
import MealsList from "./MealsList";
import Pagination from "./Pagination";
import { IMeal } from "../interfaces";

interface IProps {
  name: string;
  category: string;
}

const MealListContainer: React.FC<IProps> = ({ name, category }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [name, category]);

  const {
    data: meals,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["meals", name],
    queryFn: ({ queryKey }) => fetchMealsByName(queryKey[1]),
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError || !meals) return <h2>Error...</h2>;

  const pageSize = 6;
  const filteredMeals = filterMealsByCategory(meals, category);
  const totalPages = Math.ceil(filteredMeals.length / pageSize);
  const paginatedMeals = sliceMeals(filteredMeals, currentPage, pageSize);

  return (
    <div className="meals__list-container">
      <MealsList meals={paginatedMeals} />

      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        totalPages={totalPages}
      />
    </div>
  );
};

function filterMealsByCategory(meals: IMeal[], category: string) {
  if (category === "") return meals;

  return meals.filter(({ strCategory }) => strCategory === category);
}
function sliceMeals(meals: IMeal[], currentPage: number, pageSize: number) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return meals.slice(startIndex, endIndex);
}

export default MealListContainer;
