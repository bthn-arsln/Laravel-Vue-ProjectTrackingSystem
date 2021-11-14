import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { role } from "./module/role";
import { project } from "./module/project";
import { todo } from "./module/todo";
import { note } from "./module/note";
import { personel } from "./module/personel";
import { myInfo } from "./module/myInfo";
import { settings } from "./module/settings";
import router from "../router";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: [role, project, todo, note, personel, myInfo, settings],
    state: {
        user: null
    },
    getters: {
        isLogged: state => !!state.user,
        getMyProfileInfo: state => state.user
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
            localStorage.setItem("user", JSON.stringify(userData));
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
        },
        clearUserData() {
            localStorage.removeItem("user");
        }
    },
    actions: {
        login({ commit }, credentials) {
            return axios
                .post("/api/login", credentials)
                .then(({ data }) => {
                    if (data.status === false) {
                        alert("Hatalı şifre");
                    } else {
                        commit("setUserData", data);
                        if (data.user.role.name == "Proje Yöneticisi") {
                            router.push({ name: "Admin" });
                        } else if (data.user.role.name == "Geliştirici") {
                            router.push({ name: "Developer" });
                        }
                    }
                })
                .finally(() => {
                    Vue.swal({
                        icon: "success",
                        title: "Hoş geldiniz, başarıyla giriş yaptınız!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    location.reload();
                });
        },
        async updateMyProfile({ commit }, userData) {
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            let fd = new FormData();
            fd.append("image", userData.image ?? null);
            fd.append("name", userData.name ?? null);
            fd.append("phone", userData.phone ?? null);
            fd.append("email", userData.email ?? null);
            fd.append("password", userData.password ?? null);
            fd.append("_method", "PUT");
            await axios
                .post("/api/users/" + userData.id, fd, config)
                .then(({ data }) => {
                    commit("setUserData", data);
                    if (data.user.role.name == "Proje Yöneticisi") {
                        router.push(
                            "/admin/profile/" + data.user.slug + "/edit"
                        );
                    } else {
                        router.push("/profile/" + data.user.slug + "/edit");
                    }
                });
        },

        logout({ commit }) {
            commit("clearUserData");
        }
    }
});
