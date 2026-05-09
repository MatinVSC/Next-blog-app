import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "react-query";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  // {_id, title, enTitle, ....}
  const { categories: rawCategories = [] } = data || {};

  // {value, label}
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
};