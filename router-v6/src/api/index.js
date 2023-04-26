import request from "./request";
import requestMaoyan from './requestMaoyan'

const filmsHeaders = {
  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449","bc":"110100"}',
  'X-Host': 'mall.film-ticket.film.list'
}

const bannerHeaders = {
  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
  'X-Host': 'mall.cfg.common-banner'
}

const maoyanHeaders = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json; charset=utf-8',
  'dataType': 'json'
}


export function reqFilms(cityId=110100, pageNum=1, pageSize=20, type=1, k=2039106) {
  return request({
    url: '/gateway',
    params: {
      cityId,
      pageNum,
      pageSize,
      type,
      k
    }
  }, 'get', filmsHeaders)
}

export function reqBanners(type=2, cityId=110100, k=6454494) {
  return request({
    url: '/gateway',
    params: {
      type,
      cityId,
      k
    }
  }, 'get', bannerHeaders)
}

export function reqComingsoon () {
  return requestMaoyan({
    url: '',
  }, 'get', maoyanHeaders)
}
