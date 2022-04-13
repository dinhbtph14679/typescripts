import instance from "./instance";
import { ProducType } from "../types/product";
import { isAuthenticate } from "../utils/localstorage";




export const list = () =>{
    const url = `/products`;
    return instance.get(url);
}

export const remove = (id: number) => {
    const url = `/products/${id}`
    return instance.delete(url);
}

export const add = (products: ProducType) =>{
    const url = `products/`;
    return instance.post(url, products)
}

export const read = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url)
}

export const update = (product: ProducType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}