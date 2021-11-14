<template>
  <div>
    <!--begin::Toolbar-->
    <div class="d-flex flex-wrap flex-stack mb-6">
      <!--begin::Heading-->
      <h3 class="fw-bolder my-2">Projeler</h3>
      <!--end::Heading-->
    </div>
    <!--end::Toolbar-->
    <!--begin::Row-->
    <div class="row g-6 g-xl-9">
      <!--begin::Col-->
      <project-item
        v-for="(project, index) in myProjectsData.projects.data"
        :key="index"
        :project="project"
        v-show="myProjectsData.projects.data"
        src="/project/"
      />
      <!--end::Col-->
      <div class="alert alert-info" v-show="!myProjectsData.projects.data">
        <i class="fas fa-info-circle text-info"></i>
        Henüz bu kullanıcıya herhangi bir proje atanmamış!
      </div>
    </div>
    <!--end::Row-->

    <!--begin::Pagination-->
    <pagination
      loadPage="loadMyProjects"
      :dataParameter="auth.user.id"
      :paginationData="myProjectsData.projects"
      class="pt-10"
    />
    <!--end::Pagination-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/components/Pagination.vue";
import ProjectItem from "@/components/admin/account/ProjectItem.vue";
export default {
  name: "AccountProjects",
  components: {
    Pagination,
    ProjectItem,
  },
  computed: mapGetters({
    myProjectsData: "getMyProjects",
    auth: "getMyProfileInfo",
  }),
  mounted() {
    this.$store.dispatch("loadMyProjects", {
      param: this.auth.user.id,
      page: this.$route.query.page,
    });
  },
};
</script>
