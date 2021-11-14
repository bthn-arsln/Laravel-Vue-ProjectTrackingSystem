import axios from "axios";

export const role = {
    state: {
        roles: []
    },
    getters: {
        getRoles: state => state.roles
    },
    mutations: {
        setRole: (state, role) => (state.roles = role)
    },
    actions: {
        async loadRoles({ commit }) {
            await axios.get("/api/roles").then(response => {
                commit("setRole", response.data);
            });
        },
        async addRole({ dispatch }, role) {
            await axios.post("/api/roles", { name: role }).finally(() => {
                dispatch("loadRoles");
            });
        },
        async deleteRole({ dispatch }, id) {
            await axios.delete("/api/roles/" + id).finally(() => {
                dispatch("loadRoles");
            });
        }
    }
};
