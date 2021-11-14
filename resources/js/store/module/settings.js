import axios from "axios";

export const settings = {
    state: {
        settings: {}
    },
    getters: {
        getSettings: state => state.settings
    },
    mutations: {
        setSettings: (state, settings) => (state.settings = settings)
    },
    actions: {
        async loadSettings({ commit }) {
            axios.get("/api/settings").then(({ data }) => {
                commit("setSettings", data);
            });
        },

        async postSettings({ dispatch }, data) {
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            let fd = new FormData();
            fd.append("logo", data.logo);
            fd.append("favicon", data.favicon);
            fd.append("title", data.title);
            await axios.post("/api/settings", fd, config).then(() => {
                dispatch("loadSettings");
            });
        }
    }
};
