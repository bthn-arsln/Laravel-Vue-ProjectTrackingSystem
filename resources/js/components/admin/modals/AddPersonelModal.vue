<template>
  <div
    class="modal fade"
    id="kt_modal_add_personel"
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
            <h1 class="mb-3">Personel Ekle</h1>
            <!--end::Title-->
          </div>
          <!--end::Heading-->
          <!--begin::Users-->
          <div class="mb-10">
            <form @submit.prevent="addPersonel">
              <div class="form-group mb-5">
                <label
                  for="title"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Personel Adı</label
                >
                <small
                  class="form-text text-danger"
                  v-if="!$v.personel.name.required"
                  >* Ad Soyad alanı gereklidir!</small
                >
                <input
                  type="text"
                  v-model="personel.name"
                  class="form-control form-control-solid"
                  placeholder="Personel Adı"
                  @input="$v.personel.name.$touch()"
                />
              </div>
              <div class="form-group mb-5">
                <label
                  for="title"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Personel Email</label
                >
                <small
                  class="form-text text-danger"
                  v-if="!$v.personel.email.required"
                  >* Email alanı gereklidir!</small
                >
                <input
                  type="email"
                  v-model="personel.email"
                  class="form-control form-control-solid"
                  placeholder="Personel Email"
                  @input="$v.personel.email.$touch()"
                />
              </div>
              <div class="form-group mb-5">
                <label
                  for="urgency"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Roller</label
                >
                <small
                  class="form-text text-danger"
                  v-if="!$v.personel.role.required"
                  >* Rol alanı gereklidir!</small
                >
                <select
                  v-model="personel.role"
                  class="form-select form-select-solid"
                >
                  <option value="" disabled>Rol Seç</option>
                  <option
                    v-for="(role, index) in roles"
                    :key="index"
                    :value="role.id"
                  >
                    {{ role.name }}
                  </option>
                </select>
              </div>
              <div class="form-group mb-5">
                <label
                  for="phone"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Personel Telefon</label
                >
                <small
                  class="form-text text-danger"
                  v-if="!$v.personel.phone.required"
                  >* Telefon alanı gereklidir!</small
                >
                <input
                  type="tel"
                  v-model="personel.phone"
                  class="form-control form-control-solid"
                  placeholder="Personel Telefon"
                  v-mask="'(###) ###-####'"
                  @input="$v.personel.phone.$touch()"
                />
              </div>
              <div class="form-group mb-5">
                <label
                  for="title"
                  class="d-flex align-items-center fs-6 fw-bold mb-2"
                  >Personel Parola</label
                >
                <small
                  class="form-text text-danger"
                  v-if="!$v.personel.password.required"
                  >* Şifre alanı gereklidir!</small
                >
                <input
                  type="password"
                  v-model="personel.password"
                  class="form-control form-control-solid"
                  placeholder="Personel Parola"
                  @input="$v.personel.password.$touch()"
                />
              </div>
              <button class="btn btn-primary" type="submit">
                Personel Ekle
              </button>
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
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "AddPersonelModal",
  data() {
    return {
      personel: {
        role: "",
        name: null,
        email: null,
        phone: null,
        password: null,
      },
    };
  },
  validations: {
    personel: {
      role: { required },
      name: { required },
      email: { required },
      phone: { required },
      password: { required },
    },
  },
  methods: {
    async addPersonel() {
      if (
        this.personel.name != null &&
        this.personel.email != null &&
        this.personel.phone != null &&
        this.personel.password != null &&
        this.personel.role != null
      ) {
        this.$swal({
          icon: "success",
          title: "Personel başarıyla eklendi!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.$store.dispatch("addPersonel", this.personel).then(() => {
            this.personel = {
              role: "Rol Seç",
              name: null,
              email: null,
              phone: null,
              password: null,
            };
          });
        });
      }
    },
  },
  computed: mapGetters({ roles: "getRoles" }),
  mounted() {
    this.$store.dispatch("loadRoles");
  },
};
</script>
