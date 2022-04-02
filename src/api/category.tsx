import { CategoryType } from "../types/Category";
import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";


const {token, user} = isAuthenticate()

export const listCT = () => {
    const url = `categorys`;
    return instance.get(url)
}

export const readCT = (id: number) => {
    const url = `categorys/${id}`;
    return instance.get(url)
}

export const removeCT = (id: number) => {
    const url = `categorys/${id}`;
    return instance.delete(url)
}

export const updateCT = (data: CategoryType) => {
    const url = `categorys/${data.id}`;
    return instance.put(url,data)
}

export const addCT = (data: CategoryType) => {
    const url = `categorys/${user._id}`;
    return instance.post(url,data,{
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
}