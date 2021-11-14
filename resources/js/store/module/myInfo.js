import axios from "axios";

export const myInfo = {
    state: {
        projects: [],
        workflow: []
    },
    getters: {
        getMyProjects: state => state.projects,
        getWorkflow: state => state.workflow
    },
    mutations: {
        setMyProjects: (state, project) => (state.projects = project),
        setWorkflow: (state, project) => (state.workflow = project)
    },
    actions: {
        async loadMyProjects({ commit }, param) {
            await axios
                .get("/api/my-projects/" + param.param + "?page=" + param.page)
                .then(({ data }) => {
                    commit("setMyProjects", data);
                });
        },
        async loadWorkflow({ commit }, param) {
            await axios
                .get("/api/workflow/" + param.id + "?title=" + param.title)
                .then(({ data }) => {
                    commit("setWorkflow", data);
                });
        }
    }
};
