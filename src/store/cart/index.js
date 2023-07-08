const state = {
    cart: [],
    cartKey: "cart",
}
state.cart = JSON.parse(localStorage.getItem(state.cartKey)) ?? [];

const mutations = {
    ADD_TO_CART: (state, payload) => {
        const product = state.cart.find((item) => Number(item.id) === Number(payload.id));
        product ? product.count++ : state.cart.push({ ...payload, count: 1 });
    },
    DELETE_FROM_CART:(state, payload) => {
        const index = state.cart.findIndex((item) => Number(item.id) === Number(payload.id));
        state.cart.splice(index, 1);
    }
}

const actions = {
    UPDATE_LOCAL_CART() {
        localStorage.setItem(state.cartKey, JSON.stringify(state.cart));
    }
}
export default { state, mutations, actions }