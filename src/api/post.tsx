import instance from "./instance";

export const listPost = () => {
    const url = `/post`
    return instance.get(url)
}
export const removePost = (id: number) => {
    const url = `/post/${id}`
    return instance.delete(url)
}