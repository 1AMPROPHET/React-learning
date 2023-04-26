import { request, requestBanner } from "./request";

export function reqFilmData(cityId, pageNum, pageSize, type, k) {
  return request({
    url: "/gateway",
    params: {
      cityId,
      pageNum,
      pageSize,
      type,
      k,
    },
  })
}

export function reqBanner(type=2, cityId=110100, k=5624460) {
  return requestBanner({
    url: "/gateway",
    params: {
      type,
      cityId,
      k
    }
  })
}