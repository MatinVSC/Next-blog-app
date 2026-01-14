import { fetchCardData, fetchLatestPosts } from "@/services/data";
import { Card } from "./_components/Cards";
import PostsTable from "./posts/_/components/PostsTable";

export default async function Profile() {
    const { numberOfUsers, numberOfPosts, numberOfComments } = await fetchCardData();
    // const latestPosts = await fetchLatestPosts(); 

    return (
        <div>
            <div className="grid gap-6 md:grid-cols-3 mb-8 ">
                <Card title="کاربران" value={numberOfUsers} type="users" />
                <Card title="پست ها" value={numberOfPosts} type="posts" />
                <Card title="نظرات" value={numberOfComments} type="comments" />
            </div>
            <PostsTable query="sort=latest&limit=5" />
        </div>
    );
};

