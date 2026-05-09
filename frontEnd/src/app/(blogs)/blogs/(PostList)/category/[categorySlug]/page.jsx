import { getPosts } from "@/services/postsSevices";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import PostList from "app/(blogs)/blogs/_components/PostList";
import { cookies } from "next/headers";


const Category = async ({ searchParams, params }) => {
    const cookieStore = cookies();
    const options = setCookiesOnReq(cookieStore);
    const resolvedSearchParams = await searchParams;
    const resolvedParams = await params;
    const queryStringObj = new URLSearchParams(resolvedSearchParams);
    
    queryStringObj.set("categorySlug", resolvedParams.categorySlug);
    
    const queries = queryStringObj.toString();
    
    const { posts } = await getPosts(queries, options);
    
    return (
        <div>
            {
                (!posts || posts.length === 0) ? (
                    <p className="text-lg text-secondary-600">پستی در این دسته بندی پیدا نشد</p>
                ) : (
                    <PostList posts={posts} />
                )
            }
        </div>
    );
};

export default Category;

