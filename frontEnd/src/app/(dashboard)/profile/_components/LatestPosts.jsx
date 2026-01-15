import PostsTable from "../posts/_/components/PostsTable";

export default function LatestPosts() {
    const query = "sort=latest&limit=5";

    return <>
        <h2 className="text-xl mb-4 text-secondary-600">آخرین پست ها</h2>
        <PostsTable query={query} />
    </>
};

