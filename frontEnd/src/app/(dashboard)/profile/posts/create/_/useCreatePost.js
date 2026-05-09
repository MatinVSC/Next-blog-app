import { createPostApi } from "@/services/postsSevices";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";


export default function useCreatePost() {
    const queryClient = useQueryClient();

    const { isPending: isCreating, mutate: createPost } = useMutation({
        mutationFn: createPostApi,
        onSuccess: data => {
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })
        },
        onError: err => toast.error(err?.response?.data?.message)
    });

    return { isCreating, createPost }
};