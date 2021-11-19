<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header />
    <!--end::Header-->
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <project-list
          :projects="myProjectsData.projects"
          selectData="loadMyProjects"
          :param="auth.user.id"
          src="/project/"
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
import { mapGetters } from "vuex";
import PageHeader from "@/layout/developer/PageHeader";
import PageFooter from "@/layout/developer/PageFooter";
import ProjectList from "@/components/projects/ProjectList.vue";
export default {
  name: "Projects",
  components: {
    PageHeader,
    PageFooter,
    ProjectList,
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
