import { deletePostApi } from "@/services/postsSevices";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";


export default function useDeletePost() {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: deletePost } = useMutation({
        mutationFn: deletePostApi,
        onSuccess: data => {
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })
        },
        onError: err => toast.error(err?.response?.data?.message)
    });

    return { isDeleting, deletePost }
};