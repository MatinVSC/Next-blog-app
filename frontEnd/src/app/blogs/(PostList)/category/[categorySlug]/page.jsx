import { getPosts } from "@/services/postsSevices";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

export default async function Category({ params, searachParams }) {
    // params => fetch server=> /post/list?categorySlog=params.categorySlog

    const { categorySlug } = await params;
    const queries = `${queryString.stringify(searachParams)}&categorySlug=${categorySlug}` // serach || sort ...

    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value || "";
    const refreshToken = cookieStore.get("refreshToken")?.value || "";

    const options = {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
        },
    };

    const posts = await getPosts(queries, options);

    return (
        <div>
            {
                posts.length === 0 ? <p className="text-lg text-secondary-600">پستی در این دسته بندی پیدا نشد !</p> : <PostList posts={posts} />
            }
        </div>
    )
};

