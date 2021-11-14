<template>
  <tr>
    <td>
      <div class="symbol symbol-50px me-5">
        <img :src="projectDate.image" alt="" />
      </div>
    </td>
    <td>
      <router-link
        :to="detailUrl"
        class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
        >{{ projectDate.title }}</router-link
      ><span class="text-muted fw-bold d-block fs-7"
        >Oluşturan, {{ projectDate.creator.name }}</span
      >
    </td>

    <td class="text-end">
      <router-link
        :to="detailUrl"
        class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
        ><i class="fas fa-eye"></i
      ></router-link>
      <router-link
        v-if="auth.user.role.name == 'Proje Yöneticisi'"
        :to="editUrl"
        class="btn btn-sm btn-icon btn-bg-light btn-active-color-success"
        ><i class="fas fa-edit"></i
      ></router-link>
      <button
        v-if="auth.user.role.name == 'Proje Yöneticisi'"
        @click="deleteProject(projectDate.id)"
        class="
          btn btn-sm btn-icon btn-bg-light btn-active-color-danger
          border-0
        "
      >
        <i class="fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ProjectDateItem",
  props: {
    projectDate: Object,
    detailUrl: Object,
    editUrl: Object,
  },
  data() {
    return {
      auth: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    deleteProject(id) {
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
          this.$store.dispatch("deleteProject", {
            id,
            page: this.$route.query.page,
          });
        }
      });
    },
  },
};
</script>
