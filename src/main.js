import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import pinia from "./store";
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app.use(Vant);
app.use(router);
app.use(pinia);
app.mount("#app");
