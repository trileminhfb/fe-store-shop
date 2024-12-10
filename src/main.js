import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// import Default from "./views/login/home.vue";
// import Default from "./views/register/home.vue";
// import Default from "./layout/client/index.vue";
import Default from "./layout/admin/index.vue";

const app = createApp(App);
app.use(router);
app.component("default-layout", Default);

app.mount("#app");
