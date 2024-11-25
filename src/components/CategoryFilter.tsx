import { useQuery } from "@tanstack/react-query";
import { fetchAllCategories } from "../services";

interface IProps {
  category: string;
  setCategory: (category: string) => void;
}

const CategoryFilter: React.FC<IProps> = ({ category, setCategory }) => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchAllCategories,
  });

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="selector"
    >
      <option value={""}>all categories</option>

      {categories &&
        categories.map(({ idCategory, strCategory }) => {
          return (
            <option key={idCategory} value={strCategory}>
              {strCategory}
            </option>
          );
        })}
    </select>
  );
};

export default CategoryFilter;
