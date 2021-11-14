<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Profil Detay</h3>
      </div>
      <!--end::Card title-->
      <!--begin::Action-->
      <router-link
        :to="'/admin/profile/' + profileInfo.user.slug + '/edit'"
        class="btn btn-primary align-self-center"
        >Profili Güncelle</router-link
      >
      <!--end::Action-->
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
            profileInfo.user.name
          }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">İletişim Telefonu</label>
        <!--end::Label-->
        <!--begin::Col-->
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bolder fs-6 text-gray-800 me-2">{{
            profileInfo.user.phone
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
            profileInfo.user.email
          }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::details View-->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProfileInfo",
  computed: mapGetters({ profileInfo: "getMyProfileInfo" }),
};
</script>
