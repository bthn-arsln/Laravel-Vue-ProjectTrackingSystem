<template>
  <div class="d-flex align-items-center mb-7">
    <!--begin::Text-->
    <div class="d-flex flex-column flex-grow-1">
      <span class="text-dark text-hover-primary fs-6 fw-bolder">{{
        role.name
      }}</span>
    </div>
    <!--end::Text-->
    <button
      @click="deleteRole(role.id)"
      class="
        btn btn-icon btn-bg-light btn-active-color-danger btn-sm
        me-1
        float-end
      "
    >
      <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
      <span class="svg-icon svg-icon-3">
        <i class="fas fa-trash"></i>
      </span>
      <!--end::Svg Icon-->
    </button>
  </div>
</template>

<script>
export default {
  name: "RoleItem",
  props: ["role"],
  methods: {
    deleteRole(id) {
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
          this.$store.dispatch("deleteRole", id).then(() => {
            this.$swal({
              title: "Silindi!",
              text: "Rol başarıyla silindi.",
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
