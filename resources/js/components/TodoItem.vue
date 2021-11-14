<template>
  <div class="d-flex align-items-center mb-8 todos">
    <!--begin::Bullet-->
    <span class="bullet bullet-vertical h-40px bg-success"></span>
    <!--end::Bullet-->
    <!--begin::Checkbox-->
    <div class="form-check form-check-custom form-check-solid mx-5">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="status"
        @change="changeStatus(todo.id)"
      />
    </div>
    <!--end::Checkbox-->
    <!--begin::Description-->
    <div class="flex-grow-1">
      <a
        href="#"
        class="text-gray-800 text-hover-primary fw-bolder fs-6"
        v-show="todo.status == 1"
      >
        <s>{{ todo.text }}</s>
      </a>
      <a
        href="#"
        class="text-gray-800 text-hover-primary fw-bolder fs-6"
        v-show="todo.status == 0"
      >
        {{ todo.text }}
      </a>
      <span class="badge badge-light-primaryfs-8 fw-bolder">Yeni</span>
      <span class="text-muted fw-bold d-block">
        Oluşturan, {{ todo.author.name }}</span
      >
    </div>
    <!--end::Description-->
    <div v-if="auth.user.id == todo.author.id">
      <button
        type="button"
        class="btn btn-sm btn-icon btn-color-success btn-active-light-success"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_edit_target"
        @click="editTodo(todo.id)"
      >
        <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
        <span class="svg-icon svg-icon-2">
          <i class="fas fa-edit"></i>
        </span>
        <!--end::Svg Icon-->
      </button>
      <button
        type="button"
        class="
          btn btn-sm btn-icon btn-color-danger btn-active-light-danger
          border-0
          todoDelete
        "
        @click="deleteTodo(todo.id)"
      >
        <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
        <span class="svg-icon svg-icon-2">
          <i class="fas fa-times"></i>
        </span>
        <!--end::Svg Icon-->
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      slug: this.$route.params.project,
      status: false,
    };
  },
  mounted() {
    this.status = this.todo.status == 1 ? true : false;
  },
  computed: mapGetters({ auth: "getMyProfileInfo" }),
  methods: {
    editTodo(id) {
      this.$emit("submitTodo", id);
    },
    deleteTodo(id) {
      this.$swal({
        title: "Emin misiniz?",
        text: "Bu işlemi geri alamazsınız!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet, sil!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store
            .dispatch("deleteTodo", {
              id,
              slug: this.slug,
              page: this.$route.query.page,
            })
            .then(() => {
              this.$swal({
                title: "Silindi!",
                text: "Görev başarıyla silindi.",
                icon: "success",
                confirmButtonText: "Tamam",
              });
            });
        }
      });
    },
    changeStatus(id) {
      this.$store.dispatch("changeStatus", {
        id,
        slug: this.slug,
        status: this.status,
      });
    },
  },
};
</script>
