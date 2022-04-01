import instance from "./instance";
import { ProducType } from "../types/product";
import { isAuthenticate } from "../utils/localstorage";



const { token, user } = isAuthenticate()



export const list = () =>{
    const url = `/products`;
    return instance.get(url);
}

export const remove = (id: number) => {
    const url = `/products/${id}`
    return instance.delete(url);
}

export const add = (products: ProducType) =>{
    const url = `products/${user._id}`;
    return instance.post(url, products, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
}

export const read = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url)
}

export const update = (product: ProducType) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}