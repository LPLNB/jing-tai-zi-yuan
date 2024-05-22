import http from '@/utils/request.js'

export function ceshiOne(params) {
    return http({
        url: "ceshi",
        method: "GET",
        params
    })
}
