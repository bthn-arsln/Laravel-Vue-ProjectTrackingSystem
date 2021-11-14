<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header />
    <!--end::Header-->
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <div class="row g-5 g-xl-8">
          <total-project
            title="Atanan Proje Sayısı"
            :totalProject="myProjectsData.totalProject"
          />
          <finish-project
            title="Biten Proje Sayısı"
            :finishCount="myProjectsData.finishCount"
          />
          <urgent-project
            title="Acil Proje Sayısı"
            :urgentCount="myProjectsData.urgentCount"
          />
          <insignificant-project
            title="Önemsiz Proje Sayısı"
            :insignificantCount="myProjectsData.insignificantCount"
          />
        </div>
        <!--begin::Row-->
        <div class="row">
          <projects-due-today
            src="/project/"
            :projectsDay="myProjectsData.projectsDay"
          />
          <projects-due-this-month
            src="/project/"
            selectData="loadMyProjects"
            :param="auth.user.id"
            :projectsMonth="myProjectsData.projectsMonth"
          />
        </div>
        <!--end::Row-->
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
import ProjectsDueToday from "@/components/projects/ProjectsDueToday";
import ProjectsDueThisMonth from "@/components/projects/ProjectsDueThisMonth";
import ProjectList from "@/components/projects/ProjectList.vue";
import TotalProject from "@/components/project-statistics/TotalProject.vue";
import FinishProject from "@/components/project-statistics/FinishProject.vue";
import UrgentProject from "@/components/project-statistics/UrgentProject.vue";
import InsignificantProject from "@/components/project-statistics/InsignificantProject.vue";
export default {
  name: "Developer",
  components: {
    PageHeader,
    PageFooter,
    ProjectsDueToday,
    ProjectsDueThisMonth,
    ProjectList,
    TotalProject,
    FinishProject,
    UrgentProject,
    InsignificantProject,
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
