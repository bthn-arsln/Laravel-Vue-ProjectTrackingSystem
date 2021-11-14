<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header :pageTitle="projectDetail.project.title" />
    <!--end::Header-->
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <!--begin::Navbar-->
        <project-header
          :project="projectDetail.project"
          :todoCount="projectDetail.todoCount"
          :noteCount="projectDetail.noteCount"
          :team="projectDetail.team"
          :teamCount="projectDetail.teamCount"
          src="/admin/project/"
        />
        <!--end::Navbar-->
        <router-view />
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
import { mapGetters } from "vuex";
import PageHeader from "@/layout/admin/PageHeader";
import PageFooter from "@/layout/admin/PageFooter";
import ProjectHeader from "@/components/project/ProjectHeader";
export default {
  name: "ProjectDetail",
  components: {
    PageHeader,
    PageFooter,
    ProjectHeader,
  },
  data() {
    return {
      slug: this.$route.params.project,
    };
  },
  computed: mapGetters({ projectDetail: "getProject" }),
  mounted() {
    this.$store.dispatch("loadProject", this.slug);
  },
};
</script>
