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
              id="kt_aside_nav_tab_projects"
              role="tabpanel"
            >
              <!--begin::Wrapper-->
              <div class="m-0">
                <!--begin::Toolbar-->
                <div class="d-flex mb-10">
                  <!--begin::Search-->
                  <div
                    id="kt_header_search"
                    class="d-flex align-items-center w-lg-400px"
                    data-kt-search-keypress="true"
                    data-kt-search-min-length="2"
                    data-kt-search-enter="enter"
                    data-kt-search-layout="menu"
                    data-kt-menu-trigger="auto"
                    data-kt-menu-permanent="true"
                    data-kt-menu-placement="bottom-start"
                  >
                    <!--begin::Form-->
                    <form
                      data-kt-search-element="form"
                      class="w-100 position-relative mb-5 mb-lg-0"
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
                          translate-middle-y
                          ms-5
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
                        class="form-control form-control-solid ps-15"
                        v-model="title"
                        placeholder="Ara..."
                        data-kt-search-element="input"
                      />
                      <!--end::Input-->
                      <!--begin::Reset-->
                      <span
                        class="
                          btn btn-flush btn-active-color-primary
                          position-absolute
                          top-50
                          end-0
                          translate-middle-y
                          lh-0
                          me-4
                        "
                        v-show="title != ''"
                        @click="title = ''"
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
                  </div>
                  <!--end::Search-->
                </div>
                <!--end::Toolbar-->
                <!--begin::Projects-->
                <div class="m-0">
                  <!--begin::Heading-->
                  <h1 class="text-gray-800 fw-bold mb-6 mx-5">İş Akışı</h1>
                  <!--end::Heading-->
                  <!--begin::Items-->
                  <div class="mb-10">
                    <!--begin::Item-->
                    <router-link
                      v-for="(project, index) in workflow"
                      :key="index"
                      :to="{
                        path: '/project/' + project.slug,
                        params: { project: project.slug },
                      }"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <!--begin::Symbol-->
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="project.image"
                            class="h-50 align-self-center"
                            :alt="project.name"
                          />
                        </span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Description-->
                      <div class="d-flex flex-column flex-grow-1">
                        <!--begin::Title-->
                        <h5
                          class="custom-list-title fw-bold text-gray-800 mb-1"
                        >
                          {{ project.title }}
                        </h5>
                        <!--end::Title-->
                        <!--begin::Link-->
                        <span class="text-gray-400 fw-bold">{{
                          project.creator.name
                        }}</span>
                        <!--end::Link-->
                      </div>
                      <!--begin::Description-->
                    </router-link>
                    <!--end::Item-->
                  </div>
                  <!--end::Items-->
                </div>
                <!--end::Projects-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Tab pane-->
            <!--begin::Tab pane-->
            <div
              class="tab-pane fade"
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
                      :to="{ name: 'Developer' }"
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
                  <div class="menu-item">
                    <router-link class="menu-link" :to="{ name: 'MyProjects' }">
                      <span class="menu-icon">
                        <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
                        <span class="svg-icon svg-icon-2">
                          <i class="fas fa-folder fs-4"></i>
                        </span>
                        <!--end::Svg Icon-->
                      </span>
                      <span class="menu-title">Projelerim</span>
                    </router-link>
                  </div>
                </div>
              </div>
              <!--end::Menu-->
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
  data() {
    return {
      title: "",
    };
  },
  computed: mapGetters({ workflow: "getWorkflow", auth: "getMyProfileInfo" }),
  mounted() {
    this.$store.dispatch("loadWorkflow", { id: this.auth.user.id, title: "" });
  },
  watch: {
    title: function (value) {
      this.$store.dispatch("loadWorkflow", {
        id: this.auth.user.id,
        title: value,
      });
    },
  },
};
</script>
