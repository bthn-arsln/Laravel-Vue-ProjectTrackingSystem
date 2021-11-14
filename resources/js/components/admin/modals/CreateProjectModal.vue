<template>
  <div
    class="modal fade"
    id="kt_modal_create_project"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-900px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>Yeni Proje</h2>
          <!--end::Modal title-->
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
        <!--end::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body py-lg-10 px-lg-10">
          <form @submit.prevent="createProject" enctype="multipart/form-data">
            <!--begin::Image input-->
            <file-uploader @loaded="uploadImage" class="mb-5" />
            <!--end::Image input-->
            <div class="form-group mb-5">
              <label
                for="title"
                class="d-flex align-items-center fs-6 fw-bold mb-2"
                >Başlık</label
              >
              <small
                class="form-text text-danger"
                v-if="!$v.form.title.required"
                >* Başlık alanı gereklidir!</small
              >
              <input
                type="text"
                v-model="form.title"
                class="form-control form-control-solid"
                placeholder="Başlık"
                @input="$v.form.title.$touch()"
              />
            </div>
            <div class="form-group mb-5">
              <label
                for="urgency"
                class="d-flex align-items-center fs-6 fw-bold mb-2"
                >Aciliyet</label
              >
              <small
                class="form text text-danger"
                v-if="!$v.form.urgency.required"
                >* Aciliyet alanı gereklidir!</small
              >
              <select
                v-model="form.urgency"
                class="form-select form-select-solid"
              >
                <option disabled value="">Aciliyet Seç</option>
                <option
                  v-for="(option, index) in options"
                  :key="index"
                  :value="option.value"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
            <div class="row">
              <div class="form-group mb-5 col-md-6">
                <label
                  for="starting_date"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Başlangıç Tarihi</label
                >
                <small
                  class="form-text text-danger"
                  v-if="!$v.form.startingDate.required"
                  >* Başlangç Tarihi alanı gereklidir!</small
                >
                <date-picker
                  v-model="form.startingDate"
                  value-type="YYYY-MM-DD"
                  input-class="form-control form-control-solid cursor-pointer"
                  placeholder="Başlangıç Tarihi"
                  :editable="false"
                  @input="$v.form.startingDate.$touch()"
                />
              </div>
              <div class="form-group mb-5 col-md-6">
                <label
                  for="finished_date"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Bitiş Tarihi</label
                >
                <small
                  class="form-text text-danger"
                  v-if="!$v.form.finishedDate.required"
                  >* Bitiş Tarihi alanı gereklidir!</small
                >
                <date-picker
                  v-model="form.finishedDate"
                  value-type="YYYY-MM-DD"
                  input-class="form-control form-control-solid cursor-pointer"
                  placeholder="Bitiş Tarihi"
                  :editable="false"
                  @input="$v.form.finishedDate.$touch()"
                />
              </div>
            </div>
            <div class="form-group mb-5">
              <label
                for="description"
                class="d-flex align-items-center fs-6 fw-bold mb-2"
                >Kısa Açıklama</label
              >
              <small
                class="form-text text-danger"
                v-if="!$v.form.description.required"
                >* Kısa Açıklama alanı gereklidir!</small
              >
              <textarea
                v-model="form.description"
                class="form-control form-control-solid"
                placeholder="Kısa Açıklama"
                @input="$v.form.description.$touch()"
              ></textarea>
            </div>
            <div class="form-group mb-5">
              <label
                for="specification"
                class="d-flex align-items-center fs-6 fw-bold mb-2"
                >Teknik Şartname</label
              >
              <small
                class="form-text text-danger"
                v-if="!$v.form.specification.required"
                >* Teknik Şartname alanı gereklidir!</small
              >
              <ckeditor
                :editor="editor"
                v-model="form.specification"
                @input="$v.form.specification.$touch()"
              />
            </div>
            <button class="btn btn-primary" type="submit">Proje Oluştur</button>
          </form>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<script>
import FileUploader from "../../FileUploader.vue";
import DatePicker from "vue2-datepicker";
import Editor from "@tinymce/tinymce-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { required } from "vuelidate/lib/validators";
export default {
  name: "CreateProjectModal",
  components: {
    FileUploader,
    DatePicker,
    Editor,
  },
  data() {
    return {
      form: {
        creatorId: null,
        title: null,
        image: null,
        description: null,
        specification: null,
        urgency: "",
        startingDate: null,
        finishedDate: null,
      },
      options: [
        { name: "Acil", value: "urgent" },
        { name: "Normal", value: "normal" },
        { name: "Önemsiz", value: "insignificant" },
      ],
      editor: ClassicEditor,
      auth: JSON.parse(localStorage.getItem("user")),
    };
  },
  validations: {
    form: {
      creatorId: { required },
      title: { required },
      urgency: { required },
      description: { required },
      specification: { required },
      startingDate: { required },
      finishedDate: { required },
    },
  },
  methods: {
    uploadImage(file) {
      this.form.image = file;
    },
    createProject() {
      if (
        this.form.title != null &&
        this.form.urgency != "" &&
        this.form.description != null &&
        this.form.specification != null &&
        this.form.startingDate != null &&
        this.form.finishedDate != null
      ) {
        this.$swal({
          icon: "success",
          title: "Proje başarıyla eklendi!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.$store.dispatch("createProject", this.form).then(() => {
            this.form = {
              creatorId: this.auth.user.id,
              title: null,
              image: "",
              description: null,
              specification: "",
              urgency: "Aciliyet Seç",
              startingDate: null,
              finishedDate: null,
              page: this.$route.query.page,
            };
          });
        });
      }
    },
  },
  mounted() {
    this.form.creatorId = this.auth.user.id;
  },
};
</script>
<style src='vue2-datepicker/index.css'></style>
