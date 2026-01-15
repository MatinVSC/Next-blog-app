import { Suspense } from "react";
import CardsWrapper from "./_components/CardsWrapper";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_components/LatestPosts";

export default async function Profile() {
    // const latestPosts = await fetchLatestPosts(); 

    return (
        <div>
            <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
            <Suspense fallback={<Fallback />}>
                <CardsWrapper />
                <LatestPosts />
            </Suspense>
        </div>
    );
};

