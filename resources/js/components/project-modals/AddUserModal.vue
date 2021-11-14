<template>
  <div
    class="modal fade"
    id="kt_modal_users_search"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x="6"
                  y="17.3137"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 6 17.3137)"
                  fill="black"
                />
                <rect
                  x="7.41422"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.41422 6)"
                  fill="black"
                />
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          <!--begin::Content-->
          <div class="text-center mb-13">
            <h1 class="mb-3">Personel Ara</h1>
            <div class="text-muted fw-bold fs-5">
              Projeye bir personel atamak için aşağıdan personel seçin
            </div>
          </div>
          <!--end::Content-->
          <!--begin::Search-->
          <div
            id="kt_modal_users_search_handler"
            data-kt-search-keypress="true"
            data-kt-search-min-length="2"
            data-kt-search-enter="enter"
            data-kt-search-layout="inline"
          >
            <!--begin::Form-->
            <form
              data-kt-search-element="form"
              class="w-100 position-relative mb-5"
              autocomplete="off"
            >
              <!--begin::Hidden input(Added to disable form autocomplete)-->
              <input type="hidden" />
              <!--end::Hidden input-->
              <!--begin::Icon-->
              <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
              <span
                class="
                  svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500
                  position-absolute
                  top-50
                  ms-5
                  translate-middle-y
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x="17.0365"
                    y="15.1223"
                    width="8.15546"
                    height="2"
                    rx="1"
                    transform="rotate(45 17.0365 15.1223)"
                    fill="black"
                  />
                  <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="black"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
              <!--end::Icon-->
              <!--begin::Input-->
              <input
                type="text"
                class="form-control form-control-lg form-control-solid px-15"
                v-model="name"
                placeholder="Ada göre ara..."
                data-kt-search-element="input"
              />
              <!--end::Input-->
              <!--begin::Spinner-->
              <span
                class="
                  position-absolute
                  top-50
                  end-0
                  translate-middle-y
                  lh-0
                  d-none
                  me-5
                "
                data-kt-search-element="spinner"
              >
                <span
                  class="spinner-border h-15px w-15px align-middle text-muted"
                ></span>
              </span>
              <!--end::Spinner-->
              <!--begin::Reset-->
              <span
                class="
                  btn btn-flush btn-active-color-primary
                  position-absolute
                  top-50
                  end-0
                  translate-middle-y
                  lh-0
                  me-5
                  d-none
                "
                data-kt-search-element="clear"
              >
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="black"
                    />
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="black"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </span>
              <!--end::Reset-->
            </form>
            <!--end::Form-->
            <!--begin::Wrapper-->
            <div class="py-5">
              <!--begin::Suggestions-->
              <div data-kt-search-element="suggestions">
                <!--begin::Heading-->
                <h3 class="fw-bold mb-5">Personel:</h3>
                <!--end::Heading-->
                <!--begin::Users-->
                <div class="mh-375px scroll-y me-n7 pe-7">
                  <!--begin::User-->
                  <div
                    class="d-flex align-items-center p-3 rounded mb-1"
                    v-for="(user, index) in personel"
                    :key="index"
                  >
                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle me-5">
                      <img
                        :alt="user.name"
                        :src="user.image"
                        v-show="user.image"
                      />
                      <span
                        class="
                          symbol-label
                          bg-primary
                          text-inverse-primary
                          fw-bolder
                        "
                        v-show="!user.image"
                        >{{ user.name.charAt(0) }}</span
                      >
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Info-->
                    <div class="fw-bold w-400px">
                      <span class="fs-6 text-gray-800 me-2">{{
                        user.name
                      }}</span>
                      <span class="badge badge-light">{{
                        user.role.name
                      }}</span>
                    </div>
                    <!--end::Info-->
                    <button
                      @click="projectAddUser(user.id)"
                      class="btn btn-light btn-sm"
                      data-bs-dismiss="modal"
                    >
                      Ekle
                    </button>
                  </div>
                  <!--end::User-->
                </div>
                <!--end::Users-->
              </div>
              <!--end::Suggestions-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Search-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddUserModal",
  props: ["projectId", "projectSlug", "team"],
  data() {
    return {
      name: null,
      show: false,
    };
  },
  mounted() {
    this.$store.dispatch("loadPersonel");
  },
  computed: mapGetters({ personel: "getPersonel" }),
  methods: {
    projectAddUser(personelId) {
      this.$store.dispatch("projectAddUser", {
        personelId,
        projectId: this.projectId,
        slug: this.projectSlug,
      });
      this.$loading(true);
      setTimeout(() => {
        this.$loading(false);
      }, 1500);
    },
  },
  watch: {
    name: function (value) {
      this.$store.dispatch("searchPersonel", { name: value });
    },
  },
};
</script>
