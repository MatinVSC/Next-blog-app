import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormater";
import truncateText from "@/utils/trancateText";
import { DeletePost, UpdatePost } from "./Buttons";

const typeStyle = {
    free: {
        lable: "رایگان",
        className: "badge--success"
    },
    premium: {
        lable: "پریمیوم",
        className: "badge--secondary"
    }
};

export default function PostRow({ post, index }) {
    const { title, category, author, createdAt, type } = post;

    return (
        <Table.Row>
            <td>{toPersianDigits(index + 1)}</td>
            <td>{truncateText(title, 30)}</td>
            <td>{category.title}</td>
            <td>{author.name}</td>
            <td>{toLocalDateShort(createdAt)}</td>
            <td>
                <span className={`badge ${typeStyle[type].className}`}>{typeStyle[type].lable}</span>
            </td>
            <td>
                <div className="flex items-center gap-x-3">
                    <UpdatePost id={post._id} />
                    <DeletePost id={post._id} />
                </div>
            </td>
        </Table.Row>
    );
};