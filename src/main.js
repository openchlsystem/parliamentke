import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/style.css";
import VueGoogleCharts from "vue-google-charts";
import store from '@/store/store' // Import the Vuex store







// import * as bootstrapIcons from "bootstrap-icons";

import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);


app.use(router).use(VueGoogleCharts).use(store).mount("#app");
