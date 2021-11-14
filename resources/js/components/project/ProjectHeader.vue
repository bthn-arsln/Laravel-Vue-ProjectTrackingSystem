<template>
  <div class="card mb-6 mb-xl-9">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
        <!--begin::Image-->
        <div
          class="
            d-flex
            flex-center flex-shrink-0
            bg-light
            rounded
            w-100px
            h-100px
            w-lg-150px
            h-lg-150px
            me-7
            mb-4
          "
        >
          <img class="mw-50px mw-lg-75px" :src="project.image" alt="image" />
        </div>
        <!--end::Image-->
        <!--begin::Wrapper-->
        <div class="flex-grow-1">
          <!--begin::Head-->
          <div
            class="
              d-flex
              justify-content-between
              align-items-start
              flex-wrap
              mb-2
            "
          >
            <!--begin::Details-->
            <div class="d-flex flex-column">
              <!--begin::Status-->
              <div class="d-flex align-items-center mb-1">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3"
                  >{{ project.title }}</a
                >
                <span class="badge badge-light-success me-auto"></span>
              </div>
              <!--end::Status-->
              <!--begin::Description-->
              <div class="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
                {{ project.description }}
              </div>
              <!--end::Description-->
            </div>
            <!--end::Details-->
            <!--begin::Actions-->
            <div class="d-flex mb-4">
              <a
                href="#"
                class="btn btn-sm btn-bg-light btn-active-color-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_users_search"
                v-if="auth.user.role.name == 'Proje Yöneticisi'"
                >Personel Ekle</a
              >
              <a
                href="#"
                class="btn btn-sm btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
                >Görev Ekle</a
              >
              <!--begin::Menu-->
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_note"
                class="btn btn-sm btn-success me-3"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                Not Ekle
              </a>
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Head-->
          <!--begin::Info-->
          <div class="d-flex flex-wrap justify-content-start">
            <!--begin::Stats-->
            <div class="d-flex flex-wrap">
              <!--begin::Stat-->
              <div
                class="
                  border border-gray-300 border-dashed
                  rounded
                  min-w-125px
                  py-3
                  px-4
                  me-6
                  mb-3
                "
              >
                <!--begin::Number-->
                <div class="d-flex align-items-center">
                  <div class="fs-4 fw-bolder">
                    {{ project.finished_date | diffForHumans }}
                  </div>
                </div>
                <!--end::Number-->
                <!--begin::Label-->
                <div class="fw-bold fs-6 text-gray-400">Bitiş Tarihi</div>
                <!--end::Label-->
              </div>
              <!--end::Stat-->
              <!--begin::Stat-->
              <div
                class="
                  border border-gray-300 border-dashed
                  rounded
                  min-w-125px
                  py-3
                  px-4
                  me-6
                  mb-3
                "
              >
                <!--begin::Number-->
                <div class="d-flex align-items-center">
                  <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg-->
                  <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                    <i class="fas fa-tasks fs-4 text-primary"></i>
                  </span>
                  <!--end::Svg Icon-->
                  <div class="fs-4 fw-bolder">
                    {{ todoCount }}
                  </div>
                </div>
                <!--end::Number-->
                <!--begin::Label-->
                <div class="fw-bold fs-6 text-gray-400">Görevler</div>
                <!--end::Label-->
              </div>
              <!--end::Stat-->
              <!--begin::Stat-->
              <div
                class="
                  border border-gray-300 border-dashed
                  rounded
                  min-w-125px
                  py-3
                  px-4
                  me-6
                  mb-3
                "
              >
                <!--begin::Number-->
                <div class="d-flex align-items-center">
                  <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
                  <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                    <i class="fas fa-sticky-note fs-4 text-primary"></i>
                  </span>
                  <!--end::Svg Icon-->
                  <div class="fs-4 fw-bolder">
                    {{ noteCount }}
                  </div>
                </div>
                <!--end::Number-->
                <!--begin::Label-->
                <div class="fw-bold fs-6 text-gray-400">Notlar</div>
                <!--end::Label-->
              </div>
              <!--end::Stat-->
            </div>
            <!--end::Stats-->
            <!--begin::Users-->
            <div class="symbol-group symbol-hover mb-3">
              <!--begin::User-->
              <div
                class="symbol symbol-35px symbol-circle"
                data-bs-toggle="tooltip"
                v-for="(personel, index) in project.team.slice(0, 7)"
                :key="index"
                :title="personel.name"
              >
                <img
                  :alt="personel.name"
                  :src="personel.image"
                  v-show="personel.image"
                />
                <span
                  class="symbol-label bg-primary text-inverse-primary fw-bolder"
                  v-show="!personel.image"
                  >{{ personel.name.charAt(0) }}</span
                >
              </div>
              <!--end::User-->
              <!--begin::All users-->
              <a
                href="#"
                class="symbol symbol-35px symbol-circle"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_view_users"
                v-if="teamCount > 7"
              >
                <span
                  class="symbol-label bg-dark text-inverse-dark fs-8 fw-bolder"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  title="Daha fazla kullanıcı görüntüle"
                  >+{{ teamCount - 7 }}</span
                >
              </a>
              <!--end::All users-->
            </div>
            <!--end::Users-->
          </div>
          <!--end::Info-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Details-->
      <div class="separator"></div>
      <!--begin::Nav wrapper-->
      <project-nav :slug="project.slug" :src="src" />
      <!--end::Nav wrapper-->
    </div>
    <!--begin::Modals-->
    <!--begin::Modal - View Users-->
    <view-users-modal :team="project.team" />
    <!--end::Modal - View Users-->
    <!--begin::Modal - Add User-->
    <add-user-modal
      :projectId="project.id"
      :projectSlug="project.slug"
      :team="project.team"
    />
    <!--end::Modal - Add User-->
    <!--begin::Modal - New Todo-->
    <add-todo-modal :projectid="project.id" :projectSlug="project.slug" />
    <!--end::Modal - New Todo-->
    <!--begin::Modal - New Note-->
    <add-note-modal :projectid="project.id" :projectSlug="project.slug" />
    <!--end::Modal - New Note-->
    <!--end::Modals-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddNoteModal from "@/components/project-modals/AddNoteModal.vue";
import AddTodoModal from "@/components/project-modals/AddTodoModal.vue";
import AddUserModal from "@/components/project-modals/AddUserModal.vue";
import ViewUsersModal from "@/components/project-modals/ViewUsersModal.vue";
import ProjectNav from "./ProjectNav.vue";
export default {
  name: "ProjectHeader",
  props: ["project", "todoCount", "noteCount", "team", "teamCount", "src"],
  components: {
    ViewUsersModal,
    AddUserModal,
    AddTodoModal,
    AddNoteModal,
    ProjectNav,
  },
  computed: mapGetters({ auth: "getMyProfileInfo" }),
};
</script>
