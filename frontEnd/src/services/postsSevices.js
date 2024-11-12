export async function getPosts() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
    const { data } = await response.json()
    const { posts } = data || {};

    return posts;
};


export async function getPostBySlog(slog) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slog}`);
    const { data } = await response.json();
    const { post } = data || {};

    return post;
};
