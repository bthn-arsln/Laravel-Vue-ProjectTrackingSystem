<template>
  <div>
    <!--begin::Toolbar-->
    <div class="d-flex flex-wrap flex-stack pt-10 pb-8">
      <!--begin::Heading-->
      <h3 class="fw-bolder my-2">Proje Not Listesi</h3>
      <!--end::Heading-->
    </div>
    <!--end::Toolbar-->
    <!--begin::Tab Content-->
    <div class="tab-content">
      <!--begin::Tab pane-->
      <div id="kt_project_targets_card_pane" class="tab-pane fade show active">
        <!--begin::Row-->
        <div class="row g-9">
          <!--begin::Col-->
          <div class="col-md-4 col-lg-12 col-xl-4">
            <!--begin::Col header-->
            <div class="mb-9">
              <div class="d-flex flex-stack">
                <div class="fw-bolder fs-4">
                  Proje Yöneticisi Notları
                  <span class="fs-6 text-gray-400 ms-2"></span>
                </div>
              </div>
              <div class="h-3px w-100 bg-warning"></div>
            </div>
            <!--end::Col header-->

            <!--begin::Card-->
            <note-item
              v-for="(note, index) in noteData.notes"
              :key="index"
              :note="note"
              v-show="noteData.notes"
              @submitNote="showNote"
            />
            <!--end::Card-->

            <div class="alert alert-info" v-show="!noteData.notes">
              <i class="fas fa-info-circle text-info"></i>
              Proje yöneticisi henüz bu projeye ait bir not eklememiş!
            </div>
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div
            class="col-md-4 col-lg-12 col-xl-4"
            v-for="(personel, index) in noteData.team.data"
            :key="index"
          >
            <!--begin::Col header-->
            <div class="mb-9">
              <div class="d-flex flex-stack">
                <div class="fw-bolder fs-4">
                  {{ personel.name }} Notları
                  <span class="fs-6 text-gray-400 ms-2"></span>
                </div>
                <!--begin::Menu-->
              </div>
              <div class="h-3px w-100 bg-success"></div>
            </div>
            <!--end::Col header-->

            <!--begin::Card-->
            <note-item
              v-for="(note, index) in personel.notes"
              :key="index"
              :note="note"
              v-show="personel.notes.length"
              @submitNote="showNote"
            />
            <!--end::Card-->
            <div class="alert alert-info" v-show="!personel.notes.length">
              <i class="fas fa-info-circle text-info"></i> {{ personel.name }}
              henüz bu projeye ait bir not eklememiş!
            </div>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
      </div>
      <!--end::Tab pane-->
    </div>
    <!--end::Tab Content-->
    <!--begin::Pagination-->
    <pagination
      loadPage="loadNotes"
      :dataParameter="slug"
      :paginationData="noteData.team"
    />
    <!--end::Pagination-->
    <edit-note-modal :note="note" :projectSlug="slug" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NoteItem from "@/components/NoteItem.vue";
import Pagination from "@/components/Pagination.vue";
import EditNoteModal from "@/components/project-modals/EditNoteModal.vue";
export default {
  components: {
    NoteItem,
    Pagination,
    EditNoteModal,
  },
  name: "ProjectNotes",
  data() {
    return {
      slug: this.$route.params.project,
    };
  },
  methods: {
    showNote(id) {
      this.$store.dispatch("loadNote", id);
    },
  },
  computed: mapGetters({
    noteData: "getNotes",
    note: "getNote",
  }),
  mounted() {
    this.$store.dispatch("loadNotes", {
      param: this.slug,
      page: this.$route.query.page,
    });
  },
};
</script>
