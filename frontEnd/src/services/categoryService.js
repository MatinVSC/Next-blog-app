import http from "./httpService";

export async function getCategoryApi(options) {
    return http.get("/category/list", data, options).then(({ data }) => data.data)
};