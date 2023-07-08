import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/pages/main/index.vue")
    },
    {
        path: "/products:gender?",
        name: "products",
        component: () => import("@/pages/products/index.vue")
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import ("@/pages/cart/index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
