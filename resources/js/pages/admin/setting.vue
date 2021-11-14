<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header pageTitle="Site Ayarları" />
    <!--end::Header-->
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3 class="card-title">Proje Oluştur</h3>
          </div>
          <form @submit.prevent="postSettings" enctype="multipart/form-data">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <label for="" class="form-label d-flex">Logo</label>
                  <file-uploader
                    @loaded="uploadLogo"
                    :image="settings.logo"
                    class="mb-5"
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label d-flex">Favicon</label>
                  <file-uploader
                    @loaded="uploadFavicon"
                    :image="settings.favicon"
                    class="mb-5"
                  />
                </div>
              </div>
              <!--begin::Image input-->
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
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" type="submit">
                Ayarları Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
      <!--end::Container-->
    </div>
    <!--end::Content-->
    <!--begin::Footer-->
    <page-footer />
    <!--end::Footer-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FileUploader from "@/components/FileUploader.vue";
import PageHeader from "@/layout/admin/PageHeader.vue";
import PageFooter from "@/layout/admin/PageFooter.vue";
export default {
  name: "Setting",
  components: {
    FileUploader,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      form: {
        logo: null,
        favicon: null,
        title: null,
      },
    };
  },
  mounted() {
    this.$store.dispatch("loadSettings");
    this.form = {
      logo: this.settings.logo,
      favicon: this.settings.favicon,
      title: this.settings.title,
    };
  },
  methods: {
    uploadLogo(file) {
      this.form.logo = file;
    },
    uploadFavicon(file) {
      this.form.favicon = file;
    },
    postSettings() {
      this.$swal({
        icon: "success",
        title: "Ayarlar başarıyla kaydedildi!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        this.$store.dispatch("postSettings", this.form);
      });
    },
  },
  computed: mapGetters({ settings: "getSettings" }),
};
</script>
