import { createStore } from "vuex";
import product from "@/store/product";
import main from "@/store/main"
import cart from "@/store/cart"

export default createStore({
    modules: {
        product,
        main,
        cart
    },
});