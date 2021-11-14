<template>
  <div
    class="modal fade"
    id="kt_modal_add_role"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
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
        <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          <!--begin::Heading-->
          <div class="text-center mb-13">
            <!--begin::Title-->
            <h1 class="mb-3">Rol Ekle</h1>
            <!--end::Title-->
          </div>
          <!--end::Heading-->
          <!--begin::Users-->
          <div class="mb-10">
            <form @submit.prevent="addRole">
              <div class="form-group mb-5">
                <label
                  for="title"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Rol Adı</label
                >
                <small class="form text text-danger" v-if="!$v.role.required">
                  * Rol bilgisi boş bırakılamaz!
                </small>
                <input
                  v-model="role"
                  type="text"
                  class="form-control form-control-solid"
                  placeholder="Rol Adı"
                  @input="$v.role.$touch()"
                />
              </div>
              <button class="btn btn-primary" type="submit">Rol Ekle</button>
            </form>
          </div>
          <!--end::Users-->
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
  name: "AddRoleModal",
  data() {
    return {
      role: null,
    };
  },
  validations: {
    role: { required },
  },
  methods: {
    addRole() {
      if (this.role != null) {
        this.$swal({
          icon: "success",
          title: "Rol başarıyla eklendi!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.$store.dispatch("addRole", this.role).then(() => {
            this.role = null;
          });
        });
      }
    },
  },
};
</script>
