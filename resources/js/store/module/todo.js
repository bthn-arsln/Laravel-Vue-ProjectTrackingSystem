import Vue from "vue";
import axios from "axios";

export const todo = {
    state: {
        todos: [],
        todo: {}
    },
    getters: {
        getTodos: state => state.todos,
        getTodo: state => state.todo
    },
    mutations: {
        setTodos: (state, todo) => (state.todos = todo),
        setTodo: (state, todo) => (state.todo = todo)
    },
    actions: {
        async loadTodos({ commit }, param) {
            await axios
                .get("/api/" + param.param + "/todos" + "?page=" + param.page)
                .then(({ data }) => {
                    commit("setTodos", data);
                });
        },
        async searchTodo({ commit }, param) {
            await axios
                .get("/api/" + param.param + "/todos" + "?todo=" + param.text)
                .then(({ data }) => {
                    commit("setTodos", data);
                });
        },
        async loadTodo({ commit }, id) {
            await axios.get("/api/todos/" + id).then(({ data }) => {
                commit("setTodo", data);
            });
        },
        async addTodo({ dispatch }, todo) {
            await axios
                .post("/api/todos/" + todo.slug, {
                    author_id: todo.authorId,
                    project_id: todo.projectId,
                    text: todo.text
                })
                .then(() => {
                    Vue.swal({
                        icon: "success",
                        title: "Görev başarıyla eklendi!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    dispatch("loadTodos", {
                        param: todo.projectSlug,
                        page: todo.page
                    });
                });
        },
        async updateTodo({ dispatch }, todo) {
            let fd = new FormData();
            fd.append("text", todo.text);
            fd.append("_method", "PUT");
            await axios.post("/api/todos/" + todo.id, fd).then(() => {
                Vue.swal({
                    icon: "success",
                    title: "Görev başarıyla güncellendi!",
                    showConfirmButton: false,
                    timer: 1500
                });
                dispatch("loadTodos", {
                    param: todo.slug,
                    page: todo.page
                });
            });
        },
        async deleteTodo({ dispatch }, todo) {
            await axios.delete("/api/todos/" + todo.id).finally(() => {
                dispatch("loadTodos", { param: todo.slug, page: todo.page });
            });
        },
        async changeStatus({ dispatch }, param) {
            let fd = new FormData();
            fd.append("status", param.status == true ? 1 : 0);
            fd.append("_method", "PUT");
            await axios
                .post("/api/todos/" + param.id + "/change-status", fd)
                .finally(() => {
                    dispatch("loadTodos", { param: param.slug });
                });
        }
    }
};
