import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/css/fonts/linecons/css/linecons.css";
import "./assets/css/fonts/fontawesome/css/font-awesome.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/xenon-core.css";
import "./assets/css/xenon-components.css";
import "./assets/css/xenon-skins.css";
import "./assets/css/nav.css";
// import "./assets/main.css";

import { loadJs } from "./assets/js/app.js";

const app = createApp(App);

app.use(createPinia());

router.afterEach((to, from, next) => {
    console.log("to => ", to, "from => ", from, "next => ", next);
    if (to.path == "/" && to.hash == "") {
        loadJs();
    }
});

app.use(router);

app.mount("#app");
