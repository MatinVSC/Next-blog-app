"use client"

import { bookmarkPostApi, likePostApi } from "@/services/postsSevices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormater";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmarkIcon, HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PostIntraction({ post }) {
    const router = useRouter();

    // refresh => !!!

    const likeHandler = async (postId) => {
        try {
            const { message } = await likePostApi(postId);
            toast.success(message);
            router.refresh();
        } catch (error) {
            toast.error(error?.response?.data?.message);
        };
    };

    const bookmarkHandler = async (postId) => {
        try {
            const { message } = await bookmarkPostApi(postId);
            toast.success(message);
            router.refresh();
        } catch (error) {
            toast.error(error?.response?.data?.message);
        };
    };

    return (
        <div className="flex items-center gap-x-4">
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
                {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
            </ButtonIcon>
            <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
                {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
            </ButtonIcon>
        </div>
    )
};