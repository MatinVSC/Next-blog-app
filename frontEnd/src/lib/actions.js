"use server"

import { createCommnetApi } from "@/services/commentService"
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId, parentId, formData)

export async function createComment(prevState, { formData, postId, parentId }) {
    // 1: cretae api for adding comment
    // 2: text, postId, patent in data

    const cookiesStore = cookies();
    const options = await setCookiesOnReq(cookiesStore);

    const rawFormData = {
        postId,
        parentId,
        text: formData.get("text")
    };

    try {
        const { message } = await createCommnetApi(rawFormData, options);
        revalidatePath("/blogs/[slug]");
        return { message };
    } catch (err) {
        const error = (err?.response?.data?.message);
        return { error };
    };
};