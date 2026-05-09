"use server";

import { deleteCommentApi } from "@/services/commentService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deleteComment(prevState, formData) {
  const commentId = formData.get("commentId");

  const cookieStore = cookies();
  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await deleteCommentApi(commentId, options);
    
    revalidatePath("/profile/comments");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message || "خطایی در حذف نظر رخ داد";
    console.log({ error });
    return {
      error,
    };
  }
};