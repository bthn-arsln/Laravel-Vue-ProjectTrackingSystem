import "./bootstrap";
import Vue from "vue";
import router from "./router";
import { store } from "./store";
import { mapGetters } from "vuex";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import VueSweetalert2 from "vue-sweetalert2";
import VueMask from "v-mask";
import { VueMaskDirective } from "v-mask";
import { VueMaskFilter } from "v-mask";
import Vuelidate from "vuelidate";
import VueLoading from "vuejs-loading-plugin";

import "sweetalert2/dist/sweetalert2.min.css";

import AdminLayout from "./AdminLayout.vue";
import DeveloperLayout from "./DeveloperLayout.vue";

import "vue2-datepicker/locale/tr";
import CKEditor from "@ckeditor/ckeditor5-vue2";

// using default options
Vue.use(VueLoading);

// overwrite defaults
Vue.use(VueLoading, {
    dark: true,
    text: "Ladataan",
    loading: true,
    // customLoader: myVueComponent,
    background: "rgb(255,255,255)"
    // classes: ["myclass"]
});

Vue.use(Vuelidate);
Vue.use(VueSweetalert2);
Vue.use(VueMask);
Vue.directive("mask", VueMaskDirective);
Vue.filter("VMask", VueMaskFilter);
Vue.use(CKEditor);
Vue.filter("diffForHumans", date => {
    if (!date) return null;
    return dayjs(date).fromNow();
});

new Vue({
    router,
    store,
    components: {
        AdminLayout,
        DeveloperLayout
    },
    computed: mapGetters({ myInfo: "getMyInfo" }),
    created() {
        dayjs.extend(relativeTime);
        dayjs.locale("tr");
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const userData = JSON.parse(userInfo);
            this.$store.commit("setUserData", userData);
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    store.dispatch("logout");
                }
                return Promise.reject(error);
            }
        );
        if (!userInfo) {
            router.push({ name: "Login" });
        }
    }
}).$mount("#app");
