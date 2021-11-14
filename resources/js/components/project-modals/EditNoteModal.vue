<template>
  <div
    class="modal fade"
    id="kt_modal_edit_note"
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
          <form class="form" @submit.prevent="updateNote">
            <!--begin::Heading-->
            <div class="mb-13 text-center">
              <!--begin::Title-->
              <h1 class="mb-3">Not Güncelle</h1>
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
              <input
                type="text"
                class="form-control form-control-solid"
                placeholder="Not Başlık"
                v-model="note.title"
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
              <textarea
                type="text"
                class="form-control form-control-solid"
                placeholder="Not Başlık"
                v-model="note.description"
                rows="4"
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
export default {
  name: "EditNoteModal",
  props: {
    note: Object,
    projectSlug: String,
  },
  methods: {
    updateNote() {
      this.$store.dispatch("updateNote", {
        id: this.note.id,
        slug: this.projectSlug,
        title: this.note.title,
        description: this.note.description,
        page: this.$route.query.page,
      });
      this.$loading(true);
      setTimeout(() => {
        this.$loading(false);
      }, 1500);
    },
  },
};
</script>
