import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";

// import * as bootstrapIcons from "bootstrap-icons";

import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.use(router).mount("#app");
