"use client"

import { createComment } from "@/lib/actions";
import { useState, useEffect, useActionState } from "react";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import toast from "react-hot-toast";

const initialState = {
    error: "",
    message: "",
};

export default function CommentForm({ postId, parentId, onClose }) {
    const [text, setText] = useState("");
    const [state, formAction] = useActionState(createComment, initialState);
    // const createCommnetWithData = createComment.bind(null, postId, parentId, slug);

    useEffect(() => {
        if (state?.message) {
            toast.success(state.message);
            onClose();
        };
        if (state?.error) {
            toast.error(state.error);
        };
    }, [state]);

    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md  w-full">
                    <form
                        // action={createCommnetWithData}
                        action={async (formData) => {
                            await formAction({ formData, postId, parentId })
                        }}
                        className="space-y-7"
                    >
                        <TextArea
                            name="text"
                            label="متن نظر"
                            value={text}
                            isRequired
                            onChange={(e) => setText(e.target.value)}
                        />
                        <SubmitButton>تایید</SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    )
};

