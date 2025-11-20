import { getPostBySlug, getPosts } from "@/services/postsSevices";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comments/PostComment";

// برای Metadata نیز params باید await شود
export async function generateMetadata(props) {
    const { slug } = await props.params;
    const post = await getPostBySlug(slug);

    return {
        title: `پست ${post?.title || "نامشخص"}`,
    };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export default async function SinglePost(props) {
    const { slug } = await props.params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    return (
        <div className="text-secondary-600 max-w-screen-md mx-auto">
            <h1 className="text-secondary-700 text-2xl font-bold mb-8">
                {post.title}
            </h1>
            <p className="mb-4">{post.briefText}</p>
            <p className="mb-8">{post.text}</p>
            <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
                <Image
                    className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
                    fill
                    src={post.coverImageUrl}
                    alt={post.title}
                />
            </div>
            {post.related?.length > 0 && <RelatedPost posts={post.related} />}
            <PostComment post={post} />
        </div>
    );
}
