import { fetchCardData } from "@/services/data";
import Card from "./Cards";

export default async function CardsWrapper() {
    const { numberOfUsers, numberOfPosts, numberOfComments } = await fetchCardData();

    return (
        <div className="grid gap-6 md:grid-cols-3 mb-8 ">
            <Card title="کاربران" value={numberOfUsers} type="users" />
            <Card title="پست ها" value={numberOfPosts} type="posts" />
            <Card title="نظرات" value={numberOfComments} type="comments" />
        </div>
    );
};

