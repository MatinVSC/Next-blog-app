import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postsSevices";
import queryString from "query-string";

export default async function BlogPage({ searchParams }) {
    const queries = queryString.stringify(searchParams);
    const cookieStore = cookies();
    const options = setCookiesOnReq(cookieStore);
    const posts = await getPosts(queries, options);

    const { search } = searchParams;


    return (
        <>
            {
                search ? <p className="mb-4 text-secondary-700">
                    {
                        posts.length == 0 ? "هیج پستی با این مشخصات پیدا نشد"
                        : `نشان دادن ${posts.length} نتیجه برای`
                    }
                    <span className="font-bild"> &quot; {search} &quot;</span>
                </p> 
                : null
            }
            <PostList posts={posts} />
        </>
    )
};