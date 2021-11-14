<template>
  <div class="aside-secondary d-flex flex-row-fluid">
    <!--begin::Workspace-->
    <div class="aside-workspace my-5 p-5" id="kt_aside_wordspace">
      <div class="d-flex h-100 flex-column">
        <!--begin::Wrapper-->
        <div
          class="flex-column-fluid hover-scroll-y"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_wordspace"
          data-kt-scroll-dependencies="#kt_aside_secondary_footer"
          data-kt-scroll-offset="0px"
        >
          <!--begin::Tab content-->
          <div class="tab-content">
            <!--begin::Tab pane-->
            <div
              class="tab-pane fade active show"
              id="kt_aside_nav_tab_menu"
              role="tabpanel"
            >
              <!--begin::Menu-->
              <div
                class="
                  menu
                  menu-column
                  menu-fit
                  menu-rounded
                  menu-title-gray-600
                  menu-icon-gray-400
                  menu-state-primary
                  menu-state-icon-primary
                  menu-state-bullet-primary
                  menu-arrow-gray-500
                  fw-bold
                  fs-5
                  px-6
                  my-5 my-lg-0
                "
                id="kt_aside_menu"
                data-kt-menu="true"
              >
                <div id="kt_aside_menu_wrapper" class="menu-fit">
                  <div class="menu-item">
                    <div class="menu-content pb-2">
                      <span
                        class="menu-section text-muted text-uppercase fs-8 ls-1"
                        >Anasayfa</span
                      >
                    </div>
                  </div>
                  <div class="menu-item">
                    <router-link
                      class="menu-link"
                      :to="{ name: 'Admin' }"
                      active-class="active"
                      exact
                    >
                      <span class="menu-icon">
                        <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                        <span class="svg-icon svg-icon-2">
                          <i class="fas fa-home fs-4"></i>
                        </span>
                        <!--end::Svg Icon-->
                      </span>
                      <span class="menu-title">Anasayfa</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <div class="menu-content pt-8 pb-2">
                      <span
                        class="menu-section text-muted text-uppercase fs-8 ls-1"
                        >Seçenekler</span
                      >
                    </div>
                  </div>
                  <div
                    data-kt-menu-trigger="click"
                    class="menu-item menu-accordion"
                    :class="
                      $route.name == 'Projects' ||
                      $route.name == 'ProjectCreate'
                        ? 'hover show'
                        : ''
                    "
                  >
                    <span class="menu-link">
                      <span class="menu-icon">
                        <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                        <span class="svg-icon svg-icon-2">
                          <i class="fas fa-folder fs-4"></i>
                        </span>
                        <!--end::Svg Icon-->
                      </span>
                      <span class="menu-title">Proje Yönetimi</span>
                      <span class="menu-arrow"></span>
                    </span>
                    <div class="menu-sub menu-sub-accordion menu-active-bg">
                      <div
                        data-kt-menu-trigger="click"
                        class="menu-item menu-accordion"
                      >
                        <router-link
                          :to="{ name: 'Projects' }"
                          class="menu-link"
                          active-class="active"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">Proje Listesi</span>
                        </router-link>
                      </div>
                      <div
                        data-kt-menu-trigger="click"
                        class="menu-item menu-accordion"
                      >
                        <router-link
                          :to="{
                            name: 'ProjectCreate',
                          }"
                          class="menu-link"
                          active-class="active"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">Yeni Proje</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item">
                    <router-link
                      class="menu-link"
                      :to="{ name: 'Setting' }"
                      active-class="active"
                    >
                      <span class="menu-icon">
                        <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
                        <span class="svg-icon svg-icon-2">
                          <i class="fas fa-cog fs-4"></i>
                        </span>
                        <!--end::Svg Icon-->
                      </span>
                      <span class="menu-title">Site Ayarları</span>
                    </router-link>
                  </div>
                  <div class="menu-item">
                    <router-link
                      class="menu-link"
                      :to="{ name: 'Team' }"
                      active-class="active"
                    >
                      <span class="menu-icon">
                        <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
                        <span class="svg-icon svg-icon-2">
                          <i class="fas fa-users fs-4"></i>
                        </span>
                        <!--end::Svg Icon-->
                      </span>
                      <span class="menu-title">Personel Listesi</span>
                    </router-link>
                  </div>
                </div>
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Tab pane-->
            <!--begin::Tab pane-->
            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_authors"
              role="tabpanel"
            >
              <!--begin::Authors-->
              <div class="mx-5">
                <!--begin::Header-->
                <h3 class="fw-bolder text-dark mx-0 mb-10">Takım</h3>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="mb-12">
                  <!--begin::Item-->
                  <div
                    class="d-flex align-items-center mb-7"
                    v-for="(member, index) in team"
                    :key="index"
                  >
                    <!--begin::Avatar-->
                    <div class="symbol symbol-50px me-5">
                      <img
                        :src="member.image"
                        class=""
                        :alt="member.name"
                        v-show="member.image"
                      />
                      <span
                        class="
                          symbol-label
                          bg-primary
                          text-inverse-primary
                          fw-bolder
                          h2
                        "
                        v-show="!member.image"
                        >{{ member.name.charAt(0) }}</span
                      >
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Text-->
                    <div class="flex-grow-1">
                      <router-link
                        :to="{
                          path: '/admin/account/' + member.slug,
                          params: { slug: member.slug },
                        }"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                        >{{ member.name }}</router-link
                      >
                      <span class="text-muted d-block fw-bold">{{
                        member.role.name
                      }}</span>
                    </div>
                    <!--end::Text-->
                  </div>
                  <!--end::Item-->
                </div>
                <!--end::Body-->
              </div>
              <!--end::Authors-->
            </div>
            <!--end::Tab pane-->
          </div>
          <!--end::Tab content-->
        </div>
        <!--end::Wrapper-->
      </div>
    </div>
    <!--end::Workspace-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AsideSecondary",
  computed: mapGetters({ team: "getPersonel" }),
  mounted() {
    this.$store.dispatch("loadPersonel");
  },
};
</script>
