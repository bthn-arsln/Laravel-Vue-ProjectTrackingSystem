<template>
  <div
    class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto"
  >
    <!--begin::Logo-->
    <div
      class="
        aside-logo
        d-none d-lg-flex
        flex-column
        align-items-center
        flex-column-auto
        py-10
      "
      id="kt_aside_logo"
    >
      <router-link :to="{ name: 'Admin' }">
        <img :alt="settings.title" :src="settings.logo" class="h-35px" />
      </router-link>
    </div>
    <!--end::Logo-->
    <!--begin::Nav-->
    <div
      class="
        aside-nav
        d-flex
        flex-column
        align-items-center
        flex-column-fluid
        w-100
        pt-5 pt-lg-0
      "
      id="kt_aside_nav"
    >
      <!--begin::Wrapper-->
      <div
        class="hover-scroll-y mb-10"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-height="auto"
        data-kt-scroll-wrappers="#kt_aside_nav"
        data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
        data-kt-scroll-offset="0px"
      >
        <!--begin::Nav-->
        <ul class="nav flex-column">
          <!--begin::Nav item-->
          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title="Menu"
          >
            <!--begin::Nav link-->
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
                active
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_menu"
            >
              <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
              <span class="svg-icon svg-icon-2x">
                <i class="fas fa-compass fs-1"></i>
              </span>
              <!--end::Svg Icon-->
            </a>
            <!--end::Nav link-->
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title="Takım"
          >
            <!--begin::Nav link-->
            <a
              class="
                nav-link
                btn
                btn-icon
                btn-active-color-primary
                btn-color-gray-400
                btn-active-light
              "
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_authors"
            >
              <!--begin::Svg Icon | path: icons/duotune/files/fil005.svg-->
              <span class="svg-icon svg-icon-2x">
                <i class="fas fa-users fs-1"></i>
              </span>
              <!--end::Svg Icon-->
            </a>
            <!--end::Nav link-->
          </li>
          <!--end::Nav item-->
        </ul>
        <!--end::Tabs-->
      </div>
      <!--end::Nav-->
    </div>
    <!--end::Nav-->
    <!--begin::Footer-->
    <div
      class="
        aside-footer
        d-flex
        flex-column
        align-items-center
        flex-column-auto
      "
      id="kt_aside_footer"
    >
      <!--begin::User-->
      <div
        class="d-flex align-items-center mb-10"
        id="kt_header_user_menu_toggle"
      >
        <!--begin::Menu wrapper-->
        <div
          class="cursor-pointer symbol symbol-40px"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="User profile"
        >
          <img :src="auth.user.image" alt="image" v-show="auth.user.image" />
          <span
            class="symbol-label bg-primary text-inverse-primary fw-bolder h2"
            v-show="!auth.user.image"
            >{{ auth.user.name.charAt(0) }}</span
          >
        </div>
        <!--begin::Menu-->
        <div
          class="
            menu
            menu-sub
            menu-sub-dropdown
            menu-column
            menu-rounded
            menu-gray-800
            menu-state-bg
            menu-state-primary
            fw-bold
            py-4
            fs-6
            w-275px
          "
          data-kt-menu="true"
        >
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <div class="menu-content d-flex align-items-center px-3">
              <!--begin::Avatar-->
              <div class="symbol symbol-50px me-5">
                <img
                  :alt="auth.user.name"
                  :src="auth.user.image"
                  v-show="auth.user.image"
                />
                <span
                  class="
                    symbol-label
                    bg-primary
                    text-inverse-primary
                    fw-bolder
                    h2
                  "
                  v-show="!auth.user.image"
                  >{{ auth.user.name.charAt(0) }}</span
                >
              </div>
              <!--end::Avatar-->
              <!--begin::Username-->
              <div class="d-flex flex-column">
                <div class="fw-bolder d-flex align-items-center fs-5">
                  {{ auth.user.name }}
                </div>
                <a
                  href="#"
                  class="fw-bold text-muted text-hover-primary fs-7"
                  >{{ auth.user.email }}</a
                >
              </div>
              <!--end::Username-->
            </div>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu separator-->
          <div class="separator my-2"></div>
          <!--end::Menu separator-->
          <!--begin::Menu item-->
          <div class="menu-item px-5">
            <router-link
              :to="'/admin/profile/' + auth.user.slug"
              class="menu-link px-5"
              >Profilim</router-link
            >
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-5 my-1">
            <router-link
              :to="'/admin/profile/' + auth.user.slug + '/edit'"
              class="menu-link px-5"
              >Hesap Ayarları</router-link
            >
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-5">
            <a
              href="/login"
              class="menu-link px-5 border-0 bg-transparent"
              @click="logout"
            >
              Çıkış Yap
            </a>
          </div>
          <!--end::Menu item-->
        </div>
        <!--end::Menu-->
        <!--end::Menu wrapper-->
      </div>
      <!--end::User-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AsidePrimary",
  computed: mapGetters({ auth: "getMyProfileInfo", settings: "getSettings" }),
  mounted() {
    this.$store.dispatch("loadSettings");
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
