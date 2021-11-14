<template>
  <div class="modal fade" tabindex="-1" id="kt_modal_status_change">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ project.title }} durumunu güncelle</h5>

          <!--begin::Close-->
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span class="svg-icon svg-icon-2x">
              <i class="fas fa-times"></i>
            </span>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <select v-model="status" class="form-select form-select-solid">
            <option disabled value="">Durum Değiştir</option>
            <option
              v-for="(option, index) in options"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            @click="statusChange"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeStatusModal",
  props: ["project"],
  data() {
    return {
      status: "",
      options: [
        { name: "Yeni Başladı", value: "start" },
        { name: "Devam Ediyor", value: "continue" },
        { name: "Bitti", value: "finish" },
        { name: "İptal Edildi", value: "reject" },
      ],
    };
  },
  methods: {
    async statusChange() {
      this.$loading(true);
      setTimeout(() => {
        this.$loading(false);
      }, 1500);
      await axios
        .post("/api/projects/" + this.project.id + "/status-change", {
          status: this.status,
        })
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Proje durumu başarıyla değiştirildi",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$store.dispatch("loadProjects", { page: null });
        });
      this.status = "";
    },
  },
};
</script>
