<template>
  <tr>
    <td>
      <div class="d-flex align-items-center">
        <div class="symbol symbol-50px me-5">
          <img :src="project.image" alt="" />
        </div>
        <div class="d-flex justify-content-start flex-column">
          <router-link
            :to="detailUrl"
            class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
            >{{ project.title }}</router-link
          ><span class="text-muted fw-bold text-muted d-block fs-7"
            >Oluşturan, {{ project.creator.name }}
          </span>
        </div>
      </div>
    </td>
    <td>
      <span
        class="cursor-pointer"
        :class="statusClass"
        v-show="project.status == 'start'"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_status_change"
        @click="dispatchProject(project)"
        >Yeni Başladı</span
      >
      <span
        class="cursor-pointer"
        :class="statusClass"
        v-show="project.status == 'continue'"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_status_change"
        @click="dispatchProject(project)"
        >Devam Ediyor</span
      >
      <span
        class="cursor-pointer"
        :class="statusClass"
        v-show="project.status == 'finish'"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_status_change"
        @click="dispatchProject(project)"
        >Bitti</span
      >
      <span
        class="cursor-pointer"
        :class="statusClass"
        v-show="project.status == 'reject'"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_status_change"
        @click="dispatchProject(project)"
        >İptal Edildi</span
      >
      <span
        class="badge badge-light cursor-pointer"
        v-show="project.status == null"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_status_change"
        @click="dispatchProject(project)"
        >Durum Girilmedi</span
      >
    </td>
    <td>
      <span :class="urgencyClass" v-show="project.urgency == 'urgent'"
        >Acil</span
      >
      <span :class="urgencyClass" v-show="project.urgency == 'normal'"
        >Normal</span
      >
      <span :class="urgencyClass" v-show="project.urgency == 'insignificant'"
        >Önemsiz</span
      >
    </td>
    <td>
      <span class="text-muted fw-bold text-muted d-block fs-7">{{
        project.starting_date | diffForHumans
      }}</span>
    </td>
    <td>
      <span class="text-muted fw-bold text-muted d-block fs-7">{{
        project.finished_date | diffForHumans
      }}</span>
    </td>
    <td class="text-end">
      <router-link
        :to="detailUrl"
        class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
        ><span class="svg-icon svg-icon-3"><i class="fas fa-eye"></i></span
      ></router-link>
      <router-link
        v-if="auth.user.role.name == 'Proje Yöneticisi'"
        :to="editUrl"
        class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1"
        ><span class="svg-icon svg-icon-3"
          ><i class="fas fa-edit"></i></span></router-link
      ><button
        v-if="auth.user.role.name == 'Proje Yöneticisi'"
        @click="deleteProject(project.id)"
        class="
          btn btn-icon btn-bg-light btn-active-color-danger btn-sm
          border-0
        "
      >
        <span class="svg-icon svg-icon-3"><i class="fas fa-trash"></i></span>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProjectListItem",
  props: {
    project: Object,
    detailUrl: Object,
    editUrl: Object,
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
          this.$store
            .dispatch("deleteProject", {
              id,
              page: this.$route.query.page,
            })
            .then(() => {
              this.$swal({
                title: "Silindi!",
                text: "Proje başarıyla silindi.",
                icon: "success",
                confirmButtonText: "Tamam",
              });
            });
        }
      });
    },
    dispatchProject(project) {
      this.$emit("dispatchProject", project);
    },
  },
  computed: {
    ...mapGetters({ auth: "getMyProfileInfo" }),
    statusClass() {
      return {
        "badge badge-success": this.project.status == "start",
        "badge badge-info": this.project.status == "continue",
        "badge badge-primary": this.project.status == "finish",
        "badge badge-danger": this.project.status == "reject",
      };
    },
    urgencyClass() {
      return {
        "badge badge-danger": this.project.urgency == "urgent",
        "badge badge-primary": this.project.urgency == "normal",
        "badge badge-warning": this.project.urgency == "insignificant",
      };
    },
  },
};
</script>
