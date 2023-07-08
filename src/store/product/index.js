import productsApi from "@/api/products.js"

const state = {
    products: [],
    isLoading: false,
    isError: false,
    modalState: null,
    isModal: false,
    filterVars: ["men\'s clothing", "women\'s clothing"]
}

const mutations = {
    GET_PRODUCTS_START: (state) => {
        state.isLoading = true;
    },
    GET_PRODUCTS_SUCCESS: (state, payload) => {
        state.products = payload;
        state.isLoading = false;
    },
    GET_PRODUCTS_FAILURE: (state) => {
        state.isLoading = false;
        state.isError = true;
    },
    SET_MODAL_STATE: (state, payload) => {
        state.modalState = payload;
    },
    TOGGLE_MODAL: (state) => {
        state.isModal = !state.isModal;
    }
}

const actions = {
    GET_PRODUCTS(context) {
        return new Promise((resolve) => {
            context.commit("GET_PRODUCTS_START");
            productsApi.getProducts()
                .then((response) => {
                    const data = response.data;
                    const filterData = data.filter((item) => state.filterVars.includes(item.category));

                    context.commit("GET_PRODUCTS_SUCCESS", filterData);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log("can\'t get products", error);
                    context.commit("GET_PRODUCTS_FAILURE");
                })
        })
    }
}
export default { state, actions, mutations }