import App from './App.vue'

//utils
import { createApp } from 'vue'

//styles
import './style.css'

//utils
import store from "@/store/store";
import router from "@/plugins/router/index";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')