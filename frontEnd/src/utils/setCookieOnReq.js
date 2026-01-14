export default async function setCookiesOnReq(cookiesPromise) {
  // 1. ابتدا باید از promise بودن کوکی‌ها مطمئن شویم
  const cookieStore = await cookiesPromise; 

  const options = {
    headers: {
      Cookie:
        `${cookieStore.get("accessToken")?.name}=${
          cookieStore.get("accessToken")?.value
        }; ${cookieStore.get("refreshToken")?.name}=${
          cookieStore.get("refreshToken")?.value
        }` || "-",
    },
  };

  return options;
};