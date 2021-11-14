<template>
  <div class="card shadow-sm">
    <div class="card-header">
      <h3 class="card-title">Proje Güncelle</h3>
    </div>
    <form @submit.prevent="updateProject" enctype="multipart/form-data">
      <div class="card-body">
        <!--begin::Image input-->
        <file-uploader @loaded="uploadImage" :image="form.image" class="mb-5" />
        <!--end::Image input-->
        <div class="form-group mb-5">
          <label for="title" class="form-label">Başlık</label>
          <input
            type="text"
            v-model="form.title"
            class="form-control form-control-solid"
            placeholder="Başlık"
          />
        </div>
        <div class="row">
          <div class="form-group mb-5 col-md-6">
            <label for="urgency" class="form-label">Aciliyet</label>
            <select
              v-model="form.urgency"
              class="form-select form-select-solid"
            >
              <option
                v-for="(option, index) in urgencyOptions"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="form-group mb-5 col-md-6">
            <label for="status" class="form-label">Durum</label>
            <select v-model="form.status" class="form-select form-select-solid">
              <option disabled>Durum Seç</option>
              <option
                v-for="(option, index) in statusOptions"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="form-group mb-5 col-md-6">
            <label for="starting_date" class="form-label d-block"
              >Başlangıç Tarihi</label
            >
            <date-picker
              v-model="form.startingDate"
              value-type="YYYY-MM-DD"
              input-class="form-control form-control-solid cursor-pointer"
              placeholder="Başlangıç Tarihi"
              :editable="false"
            />
          </div>
          <div class="form-group mb-5 col-md-6">
            <label for="finished_date" class="form-label d-block"
              >Bitiş Tarihi</label
            >
            <date-picker
              v-model="form.finishedDate"
              value-type="YYYY-MM-DD"
              input-class="form-control form-control-solid cursor-pointer"
              placeholder="Bitiş Tarihi"
              :editable="false"
            />
          </div>
        </div>
        <div class="form-group mb-5">
          <label for="description" class="form-label">Kısa Açıklama</label>
          <textarea
            v-model="form.description"
            class="form-control form-control-solid"
            placeholder="Kısa Açıklama"
          ></textarea>
        </div>
        <div class="form-group mb-5">
          <label for="specification" class="form-label">Teknik Şartname</label>
          <ckeditor :editor="editor" v-model="form.specification"></ckeditor>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary" type="submit">Proje Güncelle</button>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import FileUploader from "@/components/FileUploader.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapGetters } from "vuex";
export default {
  name: "ProjectEdit",
  components: {
    DatePicker,
    FileUploader,
  },
  data() {
    return {
      form: {
        creatorId: null,
        title: null,
        slug: null,
        image: null,
        description: null,
        specification: null,
        status: null,
        urgency: null,
        startingDate: null,
        finishedDate: null,
      },
      statusOptions: [
        { name: "Yeni Başladı", value: "start" },
        { name: "Devam Ediyor", value: "continue" },
        { name: "Bitti", value: "finish" },
        { name: "İptal Edildi", value: "reject" },
      ],
      urgencyOptions: [
        { name: "Acil", value: "urgent" },
        { name: "Normal", value: "normal" },
        { name: "Önemsiz", value: "insignificant" },
      ],
      editor: ClassicEditor,
      slug: this.$route.params.project,
    };
  },
  computed: mapGetters({ creator: "getMyProfileInfo" }),
  methods: {
    uploadImage(file) {
      this.form.image = file;
    },
    updateProject() {
      this.$swal({
        icon: "success",
        title: "Proje başarıyla güncellendi!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        this.$store.dispatch("updateProject", this.form);
      });
    },
  },
  created() {
    axios.get("/api/projects/" + this.slug).then(({ data }) => {
      this.form = {
        id: data.project.id,
        title: data.project.title,
        slug: data.project.slug,
        image: data.project.image,
        description: data.project.description,
        specification: data.project.specification,
        status: data.project.status ?? "Durum Seç",
        urgency: data.project.urgency,
        startingDate: data.project.starting_date,
        finishedDate: data.project.finished_date,
      };
    });
  },
};
</script>
<style src='vue2-datepicker/index.css'></style>
