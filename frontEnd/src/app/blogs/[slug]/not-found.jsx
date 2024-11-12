"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NotFound() {

    return (
        <div className="h-screen">
            <div className="container xl:max-w-screen-xl">
                <div className="flex justify-center pt-10">
                    <div>
                        <h1 className="text-xl font-bold text-red-700 mb-8">
                            هیچ پستی با این مشخصات یافت نشد !
                        </h1>
                        <Link href="/blogs" className="flex gap-2 test-secondary-500">
                            برگشت به صفحه پست ها
                            <ArrowLeftIcon className="w-6 h-6 text-primary-900" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NotFound;
