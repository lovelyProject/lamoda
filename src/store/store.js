import { createStore } from "vuex";
import product from "@/store/product";
import main from "@/store/main"

export default createStore({
    modules: {
        product,
        main
    },
});