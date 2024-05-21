// 深拷贝
export function deepCopy(data) {
    return JSON.parse(JSON.stringify(data))
}
