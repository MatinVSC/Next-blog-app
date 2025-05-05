import { cookies } from "next/headers";

export async function middlewareAuth() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    const options = {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`
        },
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, options);

    const { data } = await res.json();
    const { user } = data || {};

    return user;
}
