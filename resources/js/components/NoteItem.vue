<template>
  <div class="card mb-6 mb-xl-9">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Header-->
      <div class="d-flex flex-stack mb-3">
        <!--begin::Badge-->
        <div class="badge badge-light"></div>
        <!--end::Badge-->

        <div class="badge badge-light">
          {{ note.created_at | diffForHumans }}
        </div>
        <div
          class="note_action"
          v-if="
            auth.user.id == note.author.id ||
            auth.user.role.name == 'Proje Yöneticisi'
          "
        >
          <button
            type="button"
            class="
              btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary
            "
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_edit_note"
            @click="editNote(note.id)"
          >
            <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
            <span class="svg-icon svg-icon-2">
              <i class="fas fa-edit text-primary"></i>
            </span>
            <!--end::Svg Icon-->
          </button>
          <button
            type="button"
            class="
              btn btn-sm btn-icon btn-color-light-dark btn-active-light-danger
              border-0
              noteDelete
            "
            @click="deleteNote(note.id)"
          >
            <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
            <span class="svg-icon svg-icon-2">
              <i class="fas fa-times text-danger"></i>
            </span>
            <!--end::Svg Icon-->
          </button>
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Title-->
      <div class="mb-2">
        <span class="fs-4 fw-bolder mb-1 text-gray-900">{{ note.title }}</span>
      </div>
      <!--end::Title-->
      <!--begin::Content-->
      <div class="fs-6 fw-bold text-gray-600 mb-5 scroll-y mh-250px">
        {{ note.description }}
      </div>
      <!--end::Content-->
      <!--begin::Footer-->
      <div class="d-flex flex-stack flex-wrapr">
        <!--begin::Users-->
        <div class="symbol-group symbol-hover my-1">
          <div
            class="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            title=""
          >
            <img
              :alt="note.author.name"
              :src="note.author.image"
              v-show="note.author.image"
            />
            <span
              class="symbol-label bg-primary text-inverse-primary fw-bolder"
              v-show="!note.author.image"
              >{{ note.author.name.charAt(0) }}</span
            >
          </div>
        </div>
        <!--end::Users-->
        <!--begin::Menu-->

        <!--end::Menu-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NoteItem",
  props: ["note"],
  data() {
    return {
      slug: this.$route.params.project,
    };
  },
  computed: mapGetters({ auth: "getMyProfileInfo" }),
  methods: {
    editNote(id) {
      this.$emit("submitNote", id);
    },
    deleteNote(id) {
      this.$swal({
        title: "Emin misiniz?",
        text: "Bu işlemi geri alamazsınız!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet, sil!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store
            .dispatch("deleteNote", { id, slug: this.slug })
            .then(() => {
              this.$swal({
                title: "Silindi!",
                text: "Not başarıyla silindi.",
                icon: "success",
                confirmButtonText: "Tamam",
              });
            });
        }
      });
    },
  },
};
</script>
