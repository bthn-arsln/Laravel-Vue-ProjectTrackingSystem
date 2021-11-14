<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header pageTitle="Profil" />
    <!--end::Header-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <!--begin::Navbar-->
        <profile-header :statistic="projectData" src="/admin/profile/" />
        <!--end::Navbar-->
        <router-view />
      </div>
      <!--end::Container-->
    </div>
    <!--begin::Footer-->
    <page-footer />
    <!--end::Footer-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileHeader from "@/components/profile/ProfileHeader.vue";
import PageFooter from "@/layout/admin/PageFooter.vue";
import PageHeader from "@/layout/admin/PageHeader.vue";
export default {
  name: "ProfileDetail",
  components: {
    PageHeader,
    PageFooter,
    ProfileHeader,
  },
  computed: mapGetters({ projectData: "getProjects" }),
  mounted() {
    this.$store.dispatch("loadProjects", { page: null });
  },
};
</script>
