<template>
  <div>
    <!--begin::Toolbar-->
    <div class="d-flex flex-wrap flex-stack pt-10 pb-8">
      <!--begin::Heading-->
      <h3 class="fw-bolder my-2">Proje Yapılacak Listesi</h3>
      <!--end::Heading-->
    </div>
    <!--end::Toolbar-->
    <!--begin::Tab Content-->
    <div class="tab-content">
      <!--begin::Tab pane-->
      <div id="kt_project_targets_card_pane" class="tab-pane fade show active">
        <!--begin::Row-->
        <div class="row g-9">
          <!--begin::Col-->
          <div class="col-xl-12">
            <!--begin::List Widget 3-->
            <div class="card card-xl-stretch mb-5 mb-xl-8">
              <!--begin::Header-->
              <div class="card-header border-0">
                <div class="card-title fw-bolder text-dark">
                  <!--begin::Form-->
                  <form
                    data-kt-search-element="form"
                    class="w-100 position-relative mb-5 mb-lg-0"
                    autocomplete="off"
                  >
                    <!--begin::Hidden input(Added to disable form autocomplete)-->
                    <input type="hidden" />
                    <!--end::Hidden input-->
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                    <span
                      class="
                        svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500
                        position-absolute
                        top-50
                        translate-middle-y
                        ms-5
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height="2"
                          rx="1"
                          transform="rotate(45 17.0365 15.1223)"
                          fill="black"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <!--end::Icon-->
                    <!--begin::Input-->
                    <input
                      type="text"
                      class="form-control form-control-solid ps-15"
                      v-model="text"
                      placeholder="Ara..."
                      data-kt-search-element="input"
                    />
                    <!--end::Input-->
                    <!--begin::Reset-->
                    <span
                      class="
                        btn btn-flush btn-active-color-primary
                        position-absolute
                        top-50
                        end-0
                        translate-middle-y
                        lh-0
                        me-4
                      "
                      v-show="todo != ''"
                      @click="todo = ''"
                    >
                      <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                      <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            opacity="0.5"
                            x="6"
                            y="17.3137"
                            width="16"
                            height="2"
                            rx="1"
                            transform="rotate(-45 6 17.3137)"
                            fill="black"
                          />
                          <rect
                            x="7.41422"
                            y="6"
                            width="16"
                            height="2"
                            rx="1"
                            transform="rotate(45 7.41422 6)"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                    </span>
                    <!--end::Reset-->
                  </form>
                  <!--end::Form-->
                </div>
                <div class="card-toolbar">
                  <!--begin::Menu-->
                  <button
                    type="button"
                    class="
                      btn
                      btn-sm
                      btn-icon
                      btn-color-primary
                      btn-active-light-primary
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_new_target"
                  >
                    <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
                    <span class="svg-icon svg-icon-2">
                      <i class="fas fa-plus"></i>
                    </span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--end::Menu-->
                </div>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body pt-2">
                <!--begin::Item-->
                <todo-item
                  v-for="(todo, index) in todos.data"
                  :key="index"
                  :todo="todo"
                  v-show="todos.total != 0"
                  @submitTodo="showTodo"
                />
                <!--end:Item-->

                <div class="alert alert-info" v-show="todos.total == 0">
                  <i class="fas fa-info-circle text-info"></i>
                  Henüz bu projeye ait bir görev eklenmemiş!
                </div>

                <!--begin::Pagination-->
                <pagination
                  loadPage="loadTodos"
                  :dataParameter="slug"
                  :paginationData="todos"
                />
                <!--end::Pagination-->
              </div>
              <!--end::Body-->
            </div>
            <!--end:List Widget 3-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
      </div>
      <!--end::Tab pane-->
    </div>
    <!--end::Tab Content-->
    <!--begin::Modal - Edit Todo-->
    <edit-todo-modal :todo="todo" :projectSlug="slug" />
    <!--end::Modal - Edit Todo-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "@/components/TodoItem.vue";
import Pagination from "@/components/Pagination.vue";
import EditTodoModal from "@/components/project-modals/EditTodoModal.vue";
export default {
  components: {
    TodoItem,
    Pagination,
    EditTodoModal,
  },
  name: "ProjectTodos",
  data() {
    return {
      text: "",
      slug: this.$route.params.project,
    };
  },
  methods: {
    showTodo(id) {
      this.$store.dispatch("loadTodo", id);
    },
  },
  computed: mapGetters({ todos: "getTodos", todo: "getTodo" }),
  mounted() {
    this.$store.dispatch("loadTodos", {
      param: this.slug,
      page: this.$route.query.page,
    });
  },
  watch: {
    text: function (value) {
      this.$store.dispatch("searchTodo", { param: this.slug, text: value });
    },
  },
};
</script>
