import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./postsSevices";

export async function fetchCardData() {
    const cookiesStore = await cookies();
    const options = await setCookiesOnReq(cookiesStore);

    try {
        const data = await Promise.all([
            getAllUsersApi(options),
            getAllCommentsApi(options),
            getPosts()
        ]);
        const numberOfUsers = +data[0].users.length ?? "0";
        const numberOfPosts = Number(data[2].posts.length ?? "0");
        const numberOfComments = +data[1].commentsCount ?? "0";

        return { numberOfUsers, numberOfPosts, numberOfComments };
    } catch (error) {
        console.log(error.response.data.message);
        throw new Error("خطا در بارگذاری اطلاعات");
    };
};

export async function fetchLatestPosts() {
    try {
        const posts = await getPosts("sort=latest&limite=5");
        return posts;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    };
};