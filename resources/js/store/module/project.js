import Vue from "vue";
import axios from "axios";
import router from "@/router";

export const project = {
    state: {
        projects: [],
        project: null
    },
    getters: {
        getProjects: state => state.projects,
        getProject: state => state.project
    },
    mutations: {
        setProjects: (state, project) => (state.projects = project),
        setProject: (state, project) => (state.project = project)
    },
    actions: {
        async loadProjects({ commit }, param) {
            await axios
                .get("/api/projects" + "?page=" + param.page)
                .then(({ data }) => {
                    commit("setProjects", data);
                });
        },
        async searchProject({ commit }, query) {
            await axios
                .get(
                    "/api/projects" +
                        "?title=" +
                        query.title +
                        "&status=" +
                        query.status +
                        "&urgency=" +
                        query.urgency
                )
                .then(({ data }) => {
                    commit("setProjects", data);
                });
        },
        async loadProject({ commit }, slug) {
            await axios.get("/api/projects/" + slug).then(({ data }) => {
                commit("setProject", data);
            });
        },
        async createProject({ dispatch }, projectData) {
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            let fd = new FormData();
            fd.append("creator_id", projectData.creatorId);
            fd.append("title", projectData.title);
            fd.append("image", projectData.image);
            fd.append("description", projectData.description);
            fd.append("specification", projectData.specification);
            fd.append("urgency", projectData.urgency);
            fd.append("starting_date", projectData.startingDate);
            fd.append("finished_date", projectData.finishedDate);

            await axios.post("/api/projects", fd, config).finally(() => {
                dispatch("loadProjects", {});
            });
        },
        async updateProject({ dispatch }, projectData) {
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            let fd = new FormData();
            fd.append("title", projectData.title);
            fd.append("image", projectData.image);
            fd.append("description", projectData.description);
            fd.append("specification", projectData.specification);
            fd.append("status", projectData.status);
            fd.append("urgency", projectData.urgency);
            fd.append("starting_date", projectData.startingDate);
            fd.append("finished_date", projectData.finishedDate);
            fd.append("_method", "PUT");

            await axios
                .post("/api/projects/" + projectData.id, fd, config)
                .then(({ data }) => {
                    dispatch("loadProject", data.slug);
                    router.push("/admin/project/" + data.slug + "/edit");
                });
        },

        async deleteProject({ dispatch }, param) {
            await axios.delete("/api/projects/" + param.id).finally(() => {
                dispatch("loadProjects", { page: param.page });
            });
        },

        async projectAddUser({ dispatch }, param) {
            axios
                .post("/api/projects/appoint", {
                    user_id: param.personelId,
                    project_id: param.projectId
                })
                .then(({ data }) => {
                    if (data.status == 1) {
                        Vue.swal({
                            icon: "success",
                            title: "Personel projeye dahil edildi!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        Vue.swal({
                            icon: "success",
                            title: "Personel projeden çıkarıldı!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    dispatch("loadProject", param.slug);
                    dispatch("loadNotes", { param: param.slug });
                });
        }
    }
};
