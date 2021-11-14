<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header pageTitle="Proje Listesi" />
    <!--end::Header-->
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <project-list
          selectData="loadProjects"
          :projects="projectData.projects"
          src="/admin/project/"
          @searchProject="searchProject"
        />
      </div>
      <!--end::Container-->
    </div>
    <!--end::Content-->
    <!--begin::Footer-->
    <page-footer />
    <!--end::Footer-->
  </div>
</template>

<script>
import PageHeader from "@/layout/admin/PageHeader";
import PageFooter from "@/layout/admin/PageFooter";
import ProjectList from "@/components/projects/ProjectList.vue";
import { mapGetters } from "vuex";
export default {
  name: "Projects",
  components: {
    PageHeader,
    PageFooter,
    ProjectList,
  },
  computed: mapGetters({ projectData: "getProjects" }),
  mounted() {
    this.$store.dispatch("loadProjects", {
      page: this.$route.query.page,
    });
  },
  methods: {
    searchProject(query) {
      this.$store.dispatch("searchProject", {
        title: query.title,
        status: query.status,
        urgency: query.urgency,
      });
    },
  },
};
</script>

