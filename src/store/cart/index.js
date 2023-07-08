const state = {
    cart: new Set()
}

const mutations = {
    ADD_TO_CART: (state, payload) => {
        state.cart.add(payload)
    },
    DELETE_FROM_CART:(state, payload) => {
        state.cart.delete(payload)
    }
}


export default { state, mutations }