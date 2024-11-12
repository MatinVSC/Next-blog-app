import { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/ui/Spinner";

export const revalidate = 3600;
export const experimental_ppr = true; // STATIC + DYNAMIC

export default async function BlogsPage() {

    return (
        <div>
            <p className="text-secondary-500 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, et, aliquid nemo saepe odio iure iste accusantium ipsa excepturi incidunt dolores? Ad aspernatur culpa similique error doloribus vitae reiciendis nihil!
            </p>
            <Suspense fallback={<Spinner />}>
            <PostList />
            </Suspense>
        </div>
    )
}

