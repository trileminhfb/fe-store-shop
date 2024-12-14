import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import emitter from "./emitter";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import Default from "./layout/client/index.vue";
import Admin from "./layout/admin/index.vue";

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;

app.use(router);
app.use(ElementPlus);
app.component("default-layout", Default);
app.component("admin-layout", Admin);

app.mount("#app");
