import http from "./httpService";

export async function createCommnetApi(data, options) {
    return http.post("/comment/add", data, options).then(({ data }) => data.data)
};