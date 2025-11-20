import { getPosts } from "@/services/postsSevices";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

export default async function Category({ params, searchParams }) {
    // params => fetch server
    // /post/list?categorySlug=${categorySlug}&${queries}
    const { categorySlug } = params;

    const queries = `${queryString.stringify(searchParams)}&categorySlug=${categorySlug}`; // search and sort 
    const cookieStore = cookies();
    const options = setCookiesOnReq(cookieStore);
    const posts = await getPosts(queries, options);

    return (
        <div>
            {
                posts.length == 0 ? <p className="text-lg text-secondary-600">پستی در این دسته بندی پیدا نشد</p>
                    : <PostList posts={posts} />
            }
        </div>
    )
};

