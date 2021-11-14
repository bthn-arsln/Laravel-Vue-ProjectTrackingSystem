<template>
  <div
    class="modal fade"
    id="kt_modal_projects_search"
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
            <h1 class="mb-3">Projeler</h1>
            <div class="text-muted fw-bold fs-5">personeline bir proje ata</div>
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
            <!--begin::Wrapper-->
            <div class="py-5">
              <!--begin::Suggestions-->
              <div data-kt-search-element="suggestions">
                <!--begin::Heading-->
                <h3 class="fw-bold mb-5">Projeler:</h3>
                <!--end::Heading-->
                <!--begin::Users-->
                <div class="mh-375px scroll-y me-n7 pe-7">
                  <!--begin::User-->
                  <div
                    method="post"
                    class="
                      d-flex
                      align-items-center
                      p-3
                      rounded
                      bg-state-opacity-50
                      mb-1
                    "
                    v-for="(project, index) in projectData.modalProjects"
                    :key="index"
                  >
                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle me-5">
                      <img :alt="project.title" :src="project.image" />
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Info-->
                    <div class="w-400px">
                      <h5 class="fs-6 text-gray-800 me-2">
                        {{ project.title }}
                      </h5>
                      <span class="text-gray-400 fw-bold">{{
                        project.description
                      }}</span>
                    </div>
                    <button
                      @click="userAddProject(project.id)"
                      class="btn btn-white btn-sm"
                    >
                      <i class="fas fa-folder-plus text-primary fs-4"></i>
                    </button>
                    <!--end::Info-->
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
  name: "AssignProjectModal",
  props: ["personelId", "personelSlug"],
  computed: mapGetters({ projectData: "getProjects" }),
  mounted() {
    this.$store.dispatch("loadProjects", { page: null });
  },
  methods: {
    userAddProject(projectId) {
      this.$store.dispatch("userAddProject", {
        projectId,
        personelId: this.personelId,
        slug: this.personelSlug,
        page: this.page,
      });
    },
  },
};
</script>
