<template>
  <div
    class="modal fade"
    id="kt_modal_new_note"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
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
        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <!--begin:Form-->
          <form class="form" @submit.prevent="addNote">
            <!--begin::Heading-->
            <div class="mb-13 text-center">
              <!--begin::Title-->
              <h1 class="mb-3">Yeni Not Oluştur</h1>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Not Başlık</span>
              </label>
              <!--end::Label-->
              <small
                class="form-text text-danger"
                v-if="!$v.note.title.required"
              >
                * Başlık bilgisi boş bırakılamaz!
              </small>
              <input
                type="text"
                class="form-control form-control-solid"
                placeholder="Not Başlık"
                v-model="note.title"
                @input="$v.note.title.$touch()"
              />
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span>Not İçerik</span>
              </label>
              <!--end::Label-->
              <small
                class="form-text text-danger"
                v-if="!$v.note.description.required"
              >
                * İçerik bilgisi boş bırakılamaz!
              </small>
              <textarea
                type="text"
                class="form-control form-control-solid"
                placeholder="Not Başlık"
                v-model="note.description"
                rows="4"
                @input="$v.note.description.$touch()"
              ></textarea>
            </div>
            <!--end::Input group-->
            <!--begin::Actions-->
            <div class="text-center">
              <button
                type="submit"
                id="kt_modal_new_target_submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                <span class="indicator-label">Kaydet</span>
                <span class="indicator-progress"
                  >Lütfen Bekleyin...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span
                ></span>
              </button>
            </div>
            <!--end::Actions-->
          </form>
          <!--end:Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "AddNoteModal",
  props: {
    projectid: Number,
    projectSlug: String,
  },
  data() {
    return {
      authorId: JSON.parse(localStorage.getItem("user")).user.id,
      note: {
        title: null,
        description: null,
      },
    };
  },
  validations: {
    note: {
      title: { required },
      description: { required },
    },
  },
  methods: {
    addNote() {
      if (this.note.title != null && this.note.description != null) {
        this.$store.dispatch("addNote", {
          authorId: this.authorId,
          projectId: this.projectid,
          projectSlug: this.projectSlug,
          title: this.note.title,
          description: this.note.description,
          page: this.$route.query.page,
          slug: this.projectSlug,
        });
        this.$loading(true);
        setTimeout(() => {
          this.$loading(false);
        }, 1500);
        this.note = {
          title: null,
          description: null,
        };
      }
    },
  },
};
</script>
