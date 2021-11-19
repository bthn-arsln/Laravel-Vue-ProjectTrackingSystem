import Vue from "vue";
import axios from "axios";

export const note = {
    state: {
        notes: [],
        note: {}
    },
    getters: {
        getNotes: state => state.notes,
        getNote: state => state.note
    },
    mutations: {
        setNotes: (state, note) => (state.notes = note),
        setNote: (state, note) => (state.note = note)
    },
    actions: {
        async loadNotes({ commit }, param) {
            await axios
                .get("/api/" + param.param + "/notes" + "?page=" + param.page)
                .then(({ data }) => {
                    commit("setNotes", data);
                });
        },
        async loadNote({ commit }, id) {
            await axios.get("/api/notes/" + id).then(({ data }) => {
                commit("setNote", data);
            });
        },
        async addNote({ dispatch }, note) {
            await axios
                .post("/api/notes/" + note.slug, {
                    author_id: note.authorId,
                    project_id: note.projectId,
                    title: note.title,
                    description: note.description
                })
                .then(() => {
                    Vue.swal({
                        icon: "success",
                        title: "Not başarıyla eklendi!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    dispatch("loadNotes", {
                        param: note.projectSlug,
                        page: note.page
                    });
                });
        },
        async updateNote({ dispatch }, note) {
            let fd = new FormData();
            fd.append("title", note.title);
            fd.append("description", note.description);
            fd.append("_method", "PUT");
            await axios.post("/api/notes/" + note.id, fd).then(() => {
                Vue.swal({
                    icon: "success",
                    title: "Not başarıyla güncellendi!",
                    showConfirmButton: false,
                    timer: 1500
                });
                dispatch("loadNotes", {
                    param: note.slug,
                    page: note.page
                });
            });
        },
        async deleteNote({ dispatch }, note) {
            await axios.delete("/api/notes/" + note.id).finally(() => {
                dispatch("loadNotes", { param: note.slug });
            });
        }
    }
};
