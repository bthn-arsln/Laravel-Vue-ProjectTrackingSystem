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
        v-for="(project, index) in projects.data"
        :key="index"
        :project="project"
        v-show="projects.data"
        src="/admin/project/"
      />
      <!--end::Col-->
      <div class="alert alert-info" v-show="!projects.data">
        <i class="fas fa-info-circle text-info"></i>
        Henüz bu kullanıcıya herhangi bir proje atanmamış!
      </div>
    </div>
    <!--end::Row-->

    <!--begin::Pagination-->
    <pagination
      loadPage="loadMemberProjects"
      :dataParameter="slug"
      :paginationData="projects"
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
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: mapGetters({ projects: "getMemberProjects" }),
  mounted() {
    this.$store.dispatch("loadMemberProjects", {
      slug: this.slug,
      page: this.$route.query.page,
    });
  },
};
</script>
