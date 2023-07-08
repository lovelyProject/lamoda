//icons
import woman from "@/assets/img/woman.webp";
import man from "@/assets/img/man.webp";
import allGenders from "@/assets/img/all-genders.webp";

const state = {
    filters: [
        {
            id: 1,
            query: "",
            title: "Все товары",
            icon: allGenders
        },
        {
            id: 2,
            query: "?filter=men's clothing",
            title: "Мужчинам",
            icon: man
        },
        {
            id: 3,
            query: "?filter=women's clothing",
            title: "Женщинам",
            icon: woman
        }
    ]
}

export default {
    state
}