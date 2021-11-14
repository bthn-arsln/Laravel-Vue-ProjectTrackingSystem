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
            title="Toplam Proje Sayısı"
            :totalProject="projectData.totalProject"
          />
          <finish-project
            title="Biten Proje Sayısı"
            :finishCount="projectData.finishCount"
          />
          <urgent-project
            title="Acil Proje Sayısı"
            :urgentCount="projectData.urgentCount"
          />
          <insignificant-project
            title="Önemsiz Proje Sayısı"
            :insignificantCount="projectData.insignificantCount"
          />
        </div>
        <!--begin::Row-->
        <div class="row">
          <projects-due-today
            selectData="loadProjects"
            :projectsDay="projectData.projectsDay"
            src="/admin/project/"
          />
          <projects-due-this-month
            selectData="loadProjects"
            :projectsMonth="projectData.projectsMonth"
            src="/admin/project/"
          />
        </div>
        <!--end::Row-->
        <project-list
          selectData="loadProjects"
          :projects="projectData.projects"
          src="/admin/project/"
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
import ProjectsDueToday from "@/components/projects/ProjectsDueToday";
import ProjectsDueThisMonth from "@/components/projects/ProjectsDueThisMonth";
import ProjectList from "@/components/projects/ProjectList";
import TotalProject from "@/components/project-statistics/TotalProject";
import FinishProject from "@/components/project-statistics/FinishProject";
import UrgentProject from "@/components/project-statistics/UrgentProject";
import InsignificantProject from "@/components/project-statistics/InsignificantProject";
import { mapGetters } from "vuex";
export default {
  name: "Admin",
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
  computed: mapGetters({ projectData: "getProjects" }),
  mounted() {
    this.$store.dispatch("loadProjects", { page: this.$route.query.page });
  },
};
</script>
