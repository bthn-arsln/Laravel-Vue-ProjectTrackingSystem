<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header pageTitle="Proje Oluştur" />
    <!--end::Header-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3 class="card-title">Proje Oluştur</h3>
          </div>
          <form @submit.prevent="createProject" enctype="multipart/form-data">
            <div class="card-body">
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
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" type="submit">
                Proje Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--begin::Footer-->
    <page-footer />
    <!--end::Footer-->
  </div>
</template>

<script>
import PageFooter from "@/layout/admin/PageFooter.vue";
import PageHeader from "@/layout/admin/PageHeader.vue";
import DatePicker from "vue2-datepicker";
import FileUploader from "@/components/FileUploader.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "ProjectCreate",
  components: {
    PageHeader,
    PageFooter,
    DatePicker,
    FileUploader,
    ClassicEditor,
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
  computed: mapGetters({ creator: "getMyProfileInfo" }),
  methods: {
    uploadImage(file) {
      this.form.image = file;
    },
    createProject() {
      this.$swal({
        icon: "success",
        title: "Proje başarıyla eklendi!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        this.$store.dispatch("createProject", this.form);
        this.form = {};
      });
      this.$router.push({ name: "Projects" });
    },
  },
  mounted() {
    this.form.creatorId = this.creator.user.id;
  },
};
</script>
<style src='vue2-datepicker/index.css'></style>
