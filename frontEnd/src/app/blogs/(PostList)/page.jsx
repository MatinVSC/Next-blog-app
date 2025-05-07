import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { getPosts } from "@/services/postsSevices";
import queryString from "query-string";

export const revalidate = 3600;
export const experimental_ppr = true; // STATIC + DYNAMIC

export default async function BlogsPage({ searchParams }) {
    const queries = queryString.stringify(searchParams);

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
    const { search } = searchParams;


    return (
        <>
            {
                search ?
                    <p className="mb-4 text-secondary-700">
                        {posts.length === 0
                            ? "هیچ پستی با این مشخصات پیدا نشد !"
                            : `نشان دادن ${posts.length} نتیجه برای`}
                        <span className="font-bold">&quot;{search}&quot;</span>
                    </p> :
                    null
            }
            <PostList posts={posts} />
        </>
    )
}

