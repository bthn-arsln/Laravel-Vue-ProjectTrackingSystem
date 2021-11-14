<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header pageTitle="Personel Listesi" />
    <!--end::Header-->
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <div class="row">
          <div class="col-xl-8">
            <div class="card mb-5 mb-xl-8">
              <!--begin::Header-->
              <div class="card-header border-0 pt-5">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label fw-bolder fs-3 mb-1">
                    <input
                      type="text"
                      v-model="name"
                      class="form-control form-control-solid"
                      placeholder="Ada göre ara..."
                    />
                  </span>
                </h3>
                <div class="card-toolbar">
                  <a
                    href="#"
                    class="btn btn-sm btn-light-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_add_personel"
                  >
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
                    <span class="svg-icon svg-icon-2">
                      <i class="fas fa-user-plus"></i>
                    </span>
                    <!--end::Svg Icon-->Yeni Personel</a
                  >
                </div>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body py-3">
                <!--begin::Table container-->
                <div class="table-responsive">
                  <!--begin::Table-->
                  <table class="table align-middle gs-0 gy-4">
                    <!--begin::Table head-->
                    <thead>
                      <tr class="fw-bolder text-muted bg-light">
                        <th class="ps-4 min-w-250px rounded-start">Personel</th>
                        <th class="min-w-120px">Email</th>
                        <th class="min-w-120px">Telefon</th>
                        <th class="min-w-120px text-end rounded-end"></th>
                      </tr>
                    </thead>
                    <!--end::Table head-->
                    <!--begin::Table body-->
                    <tbody>
                      <personel
                        v-for="(personel, index) in team"
                        :key="index"
                        :personel="personel"
                      />
                    </tbody>
                    <!--end::Table body-->
                  </table>
                  <!--end::Table-->
                </div>
                <!--end::Table container-->
              </div>
              <!--begin::Body-->
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card card-xl-stretch mb-xl-8">
              <!--begin::Header-->
              <div class="card-header border-0 pt-5">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label fw-bolder text-dark">Roller</span>
                </h3>
                <div class="card-toolbar">
                  <!--begin::Menu-->
                  <button
                    type="button"
                    class="
                      btn
                      btn-sm
                      btn-icon
                      btn-color-primary
                      btn-active-light-primary
                    "
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    tooltip="Yeni Rol"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_add_role"
                  >
                    <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
                    <span class="svg-icon svg-icon-2">
                      <i class="fas fa-plus"></i>
                    </span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--end::Menu-->
                </div>
              </div>
              <div class="separator my-2"></div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body pt-5">
                <!--begin::Item-->
                <role-item
                  v-for="(role, index) in roles"
                  :key="index"
                  :role="role"
                />
                <!--end::Item-->
              </div>
              <!--end::Body-->
            </div>
          </div>
        </div>
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
import PageFooter from "@/layout/admin/PageFooter.vue";
import PageHeader from "@/layout/admin/PageHeader.vue";
import Personel from "@/components/Personel.vue";
import RoleItem from "@/components/RoleItem.vue";
export default {
  name: "Team",
  components: {
    PageHeader,
    PageFooter,
    Personel,
    RoleItem,
  },
  data() {
    return {
      name: null,
    };
  },
  computed: mapGetters({ team: "getPersonel", roles: "getRoles" }),
  mounted() {
    this.$store.dispatch("loadPersonel");
    this.$store.dispatch("loadRoles");
  },
  watch: {
    name: function (value) {
      this.$store.dispatch("searchPersonel", { name: value });
    },
  },
};
</script>
