import Breadcrumbs from "@/ui/Breadcrumbs";
import { getPostById } from "@/services/postsSevices";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

// export const dynamic = "force-dynamic"

async function EditPostPage({ params }) {
  const resolvedParams = await params;
  const postId = resolvedParams.postId;

  const { data } = await getPostById(postId);
  const post = data?.post;

  if (!post) {
    notFound();
  };

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}

export default EditPostPage;