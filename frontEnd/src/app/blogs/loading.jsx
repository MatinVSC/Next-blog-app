import Spinner from "@/ui/Spinner";


export default function Loading() {
    return (
        <div className="grid flex-col items-center justify-center -gap-x-4">
            <span className="text-lg text-secondary-500">در حال بارگذاری پست ها</span>
            <Spinner />
        </div>
    )
};

