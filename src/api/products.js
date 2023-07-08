import axios from "@/api/axios.js";

const getProducts = () => {
    return axios.get('/products')
}

export default {
    getProducts
}