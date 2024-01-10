import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/element/index.scss";
import "./styles/index.css";
import ElementPlus from "element-plus";

import "boxicons/css/boxicons.min.css";

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
