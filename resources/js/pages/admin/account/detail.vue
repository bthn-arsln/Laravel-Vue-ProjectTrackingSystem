<template>
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Profil Detay</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->
    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">Ad Soyad</label>
        <!--end::Label-->
        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-gray-800">{{
            member.user.name
          }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted"
          >İletişim Telefonu
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Phone number must be active"
          ></i
        ></label>
        <!--end::Label-->
        <!--begin::Col-->
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bolder fs-6 text-gray-800 me-2">{{
            member.user.phone
          }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">E-posta</label>
        <!--end::Label-->
        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-gray-800">{{
            member.user.email
          }}</span>
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
  name: "AccountDetail",
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: mapGetters({ member: "getMember" }),
  mounted() {
    this.$store.dispatch("loadMember", this.slug);
  },
};
</script>
