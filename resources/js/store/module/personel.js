export const personel = {
    state: {
        personel: [],
        member: {},
        projects: []
    },
    getters: {
        getPersonel: state => state.personel,
        getMember: state => state.member,
        getMemberProjects: state => state.projects
    },
    mutations: {
        setPersonel: (state, personel) => (state.personel = personel),
        setMember: (state, member) => (state.member = member),
        setMemberProjects: (state, project) => (state.projects = project)
    },
    actions: {
        async loadPersonel({ commit }) {
            await axios.get("/api/users").then(({ data }) => {
                commit("setPersonel", data);
            });
        },
        async searchPersonel({ commit }, query) {
            await axios
                .get("/api/users" + "?name=" + query.name)
                .then(({ data }) => {
                    commit("setPersonel", data);
                });
        },
        async loadMember({ commit }, slug) {
            await axios.get("/api/users/" + slug).then(({ data }) => {
                commit("setMember", data);
            });
        },
        async loadMemberProjects({ commit }, param) {
            await axios
                .get(
                    "/api/users/" +
                        param.param +
                        "/projects" +
                        "?page=" +
                        param.page
                )
                .then(({ data }) => {
                    commit("setMemberProjects", data);
                });
        },
        async addPersonel({ dispatch }, personel) {
            let fd = new FormData();
            fd.append("role_id", personel.role);
            fd.append("name", personel.name);
            fd.append("email", personel.email);
            fd.append("phone", personel.phone);
            fd.append("password", personel.password);

            await axios.post("/api/users", fd).finally(() => {
                dispatch("loadPersonel");
            });
        },
        async deletePersonel({ dispatch }, id) {
            await axios.delete("/api/users/" + id).finally(() => {
                dispatch("loadPersonel");
            });
        },
        async userAddProject({ dispatch }, param) {
            axios
                .post("/api/projects/appoint", {
                    user_id: param.personelId,
                    project_id: param.projectId
                })
                .finally(() => {
                    dispatch("loadMemberProjects", {
                        param: param.slug,
                        page: param.page
                    });
                });
        }
    }
};
