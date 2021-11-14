<template>
  <div class="card mb-5 mb-xl-10" id="kt_tab_pane_2">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Profil Güncelle</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->
    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
      <form
        @submit.prevent="updateMyAccount"
        id="kt_account_profile_details_form"
        class="form"
        enctype="multipart/form-data"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6"
              >Profil Resmi</label
            >
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Image input-->
              <avatar-uploader @loaded="uploadImage" :image="form.image" />
              <!--end::Image input-->
              <!--begin::Hint-->
              <div class="form-text">
                İzin verilen dosya türleri: png, jpg, jpeg.
              </div>
              <!--end::Hint-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Ad Soyad</label
            >
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-12 fv-row">
                  <input
                    type="text"
                    v-model="form.name"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                  />
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              <span class="required">İletişim Telefonu</span>
              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input
                type="tel"
                v-model="form.phone"
                id="phone_edit"
                class="form-control form-control-lg form-control-solid"
              />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Email</label
            >
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-12 fv-row">
                  <input
                    type="email"
                    v-model="form.email"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                  />
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-bold fs-6"
              >Parola</label
            >
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-12 fv-row">
                  <input
                    type="password"
                    v-model="form.password"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                  />
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
        </div>
        <!--end::Card body-->
        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="submit"
            class="btn btn-primary"
            id="kt_account_profile_details_submit"
          >
            Değişiklikleri Kaydet
          </button>
        </div>
        <!--end::Actions-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script>
import AvatarUploader from "@/components/AvatarUploader.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProfileEdit",
  components: { AvatarUploader },
  data() {
    return {
      userId: null,
      form: {
        id: null,
        image: null,
        name: null,
        phone: null,
        email: null,
        password: null,
      },
    };
  },
  computed: mapGetters({ profileInfo: "getMyProfileInfo" }),
  methods: {
    uploadImage(file) {
      this.form.image = file;
    },
    updateMyAccount() {
      this.$store.dispatch("updateMyProfile", this.form);
      this.form.password = null;
    },
  },
  mounted() {
    this.form = {
      image: this.profileInfo.user.image,
      id: this.profileInfo.user.id,
      name: this.profileInfo.user.name,
      phone: this.profileInfo.user.phone,
      email: this.profileInfo.user.email,
    };
  },
};
</script>
