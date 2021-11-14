<template>
  <div class="mb-5 mb-xl-8 card">
    <div class="card-header border-0 pt-5">
      <div class="card-title align-items-start flex-column">
        <span
          class="card-label fw-bolder fs-3 mb-1"
          v-if="$route.name != 'Projects'"
          >Proje Listesi</span
        >
        <div class="row" v-if="$route.name == 'Projects'">
          <div class="col-md-4">
            <input
              type="text"
              v-model="title"
              class="form-control"
              placeholder="Proje Adı"
            />
          </div>
          <div class="col-md-4">
            <select v-model="status.value" class="form-select" @change="submit">
              <option disabled value="">Durum Seç</option>
              <option
                v-for="option in status.options"
                :key="option"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="col-md-4">
            <select v-model="urgency.value" class="form-select">
              <option disabled value="">Aciliyet Seç</option>
              <option
                v-for="option in urgency.options"
                :key="option"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div
        class="card-toolbar"
        v-if="auth.user.role.name == 'Proje Yöneticisi'"
      >
        <a
          href="#"
          class="btn btn-light-primary"
          tooltip="Yeni Proje"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_project"
          id="kt_toolbar_primary_button"
          v-show="$route.name != 'Projects'"
          ><span class="svg-icon svg-icon-2"
            ><i class="fas fa-folder-plus fs-4"></i
          ></span>
          Yeni Proje
        </a>
        <button
          type="button"
          class="btn btn-light btn-active-primary"
          v-show="title != '' || status.value != '' || urgency.value != ''"
          @click="reset"
        >
          <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
    <div class="card-body py-3">
      <div class="table-responsive">
        <table class="table align-middle gs-0 gy-4">
          <thead>
            <tr class="fw-bolder text-muted bg-light">
              <th class="ps-4 min-w-325px rounded-start">Proje</th>
              <th class="min-w-125px">Durum</th>
              <th class="min-w-125px">Aciliyet</th>
              <th class="min-w-125px">Başlangıç Tarihi</th>
              <th class="min-w-125px">Bitiş Tarihi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <project-item
              v-for="(project, index) in projects.data"
              :key="index"
              :project="project"
              :detailUrl="{
                path: src + project.slug,
                params: { project: project.slug },
              }"
              :editUrl="{
                path: src + project.slug + '/edit',
                params: { project: project.slug },
              }"
              @dispatchProject="loadProject"
            />
          </tbody>
        </table>
      </div>
      <pagination
        :loadPage="selectData"
        :dataParameter="param"
        :paginationData="projects"
      />
    </div>
    <change-status-modal :project="project" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "../Pagination.vue";
import ChangeStatusModal from "../project-modals/ChangeStatusModal.vue";
import ProjectItem from "./ProjectItem.vue";
export default {
  name: "ProjectList",
  props: {
    projects: Object,
    src: String,
    selectData: String,
    param: String | Number,
  },
  components: {
    ProjectItem,
    Pagination,
    ChangeStatusModal,
  },
  data() {
    return {
      project: null,
      title: "",
      status: {
        value: "",
        options: [
          { name: "Yeni Başladı", value: "start" },
          { name: "Devam Ediyor", value: "continue" },
          { name: "Bitti", value: "finish" },
          { name: "İptal Edildi", value: "reject" },
        ],
      },
      urgency: {
        value: "",
        options: [
          { name: "Acil", value: "urgent" },
          { name: "Normal", value: "normal" },
          { name: "Önemsiz", value: "insignificant" },
        ],
      },
    };
  },
  computed: mapGetters({ auth: "getMyProfileInfo" }),
  methods: {
    reset() {
      this.title = "";
      this.status.value = "";
      this.urgency.value = "";
    },
    loadProject(project) {
      this.project = project;
    },
  },
  watch: {
    title: function (value) {
      this.$emit("searchProject", {
        title: value,
        status: "",
        urgency: "",
      });
    },
    "status.value": function (value) {
      this.$emit("searchProject", {
        status: value,
        title: "",
        urgency: "",
      });
    },
    "urgency.value": function (value) {
      this.$emit("searchProject", {
        urgency: value,
        status: "",
        title: "",
      });
    },
  },
};
</script>
