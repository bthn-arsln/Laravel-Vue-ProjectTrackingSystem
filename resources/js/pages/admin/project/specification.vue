<template>
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Proje Teknik Şartname</h3>
      </div>
      <!--end::Card title-->
      <!--begin::Action-->
      <router-link
        :to="{
          path: '/admin/project/' + projectDetail.project.slug + '/edit',
          params: { project: projectDetail.project.slug },
        }"
        class="btn btn-primary align-self-center"
        >Projeyi Güncelle</router-link
      >
      <!--end::Action-->
    </div>
    <!--begin::Card header-->
    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Col-->
        <div class="col-lg-8">
          <span
            class="fw-bold fs-6 text-gray-800"
            v-html="projectDetail.project.specification"
          ></span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProjectSpecification",
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
