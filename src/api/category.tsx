import { CategoryType } from "../types/Category";
import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";


const {token, user} = isAuthenticate()

export const listCT = () => {
    const url = `category`;
    return instance.get(url)
}

export const readCT = (id: number) => {
    const url = `category/${id}`;
    return instance.get(url)
}

export const removeCT = (id: number) => {
    const url = `category/${id}`;
    return instance.delete(url)
}

export const updateCT = (data: CategoryType) => {
    const url = `category/${data.id}`;
    return instance.put(url,data)
}

export const addCT = (data: CategoryType) => {
    const url = `category/`;
    return instance.post(url,data)
}