import productsApi from "@/api/products.js"

const state = {
    products: [],
    isLoading: false,
    isError: false,
    filterVars: ["men\'s clothing", "women\'s clothing"]
}
export const mutationTypes = {
    getProductsStart: "[products] get products start",
    getProductsSuccess: "[products] get products success",
    getProductsFailure: "[products] get products failure",
}

const mutations = {
    [mutationTypes.getProductsStart]: (state) => {
        state.isLoading = true;
    },
    [mutationTypes.getProductsSuccess]: (state, payload) => {
        state.products = payload;
        state.isLoading = false;
    },
    [mutationTypes.getProductsFailure]: (state) => {
        state.isLoading = false;
        state.isError = true;
    }
}
export const actionTypes = {
    getProducts: "[products] get products",
};

const actions = {
    [actionTypes.getProducts](context) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.getProductsStart);
            productsApi.getProducts()
                .then((response) => {
                    const data = response.data;
                    const filterData = data.filter((item) => state.filterVars.includes(item.category));

                    context.commit(mutationTypes.getProductsSuccess, filterData);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log("can\'t get products", error);
                })
        })
    }
}
export default { state, actions, mutations }