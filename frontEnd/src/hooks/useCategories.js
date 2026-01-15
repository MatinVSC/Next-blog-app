import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query"

export function useCategories() {
    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queeryFn: getCategoryApi
    });

    // {_id, title, englishTitle, ...}
    const { categories: rawCategories } = data || {};

    // {value, label}
    const categories = rawCategories.map(item => ({
        label: item.title,
        value: item._id
    }));

    // {title, enTitle}
    const transformedCategories = rawCategories.map(item => ({
        label: item.title,
        value: item.englishTitle
    }));

    return { isLoading, categories, transformedCategories };
};