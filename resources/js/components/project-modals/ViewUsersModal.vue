<template>
  <div
    class="modal fade"
    id="kt_modal_view_users"
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
            <h1 class="mb-3">Personele Göz Atın</h1>
            <!--end::Title-->
            <!--begin::Description-->
            <div class="text-muted fw-bold fs-5">
              Daha fazla bilgiye ihtiyacınız varsa, lütfen
              <router-link :to="{ name: 'Team' }"
                >Personel Listesine</router-link
              >
              bakın.
            </div>
            <!--end::Description-->
          </div>
          <!--end::Heading-->
          <!--begin::Users-->
          <div class="mb-15">
            <!--begin::List-->
            <div class="mh-375px scroll-y me-n7 pe-7">
              <!--begin::User-->
              <div
                class="
                  d-flex
                  flex-stack
                  py-5
                  border-bottom border-gray-300 border-bottom-dashed
                "
                v-for="(personel, index) in team"
                :key="index"
              >
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-35px symbol-circle">
                    <img
                      :alt="personel.name"
                      :src="personel.image"
                      v-show="personel.image"
                    />
                    <span
                      class="
                        symbol-label
                        bg-primary
                        text-inverse-primary
                        fw-bolder
                      "
                      v-show="!personel.image"
                      >{{ personel.name.charAt(0) }}</span
                    >
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Details-->
                  <div class="ms-6">
                    <!--begin::Name-->
                    <a
                      href="#"
                      class="
                        d-flex
                        align-items-center
                        fs-5
                        fw-bolder
                        text-dark text-hover-primary
                      "
                      >{{ personel.name }}
                      <span class="badge badge-light fs-8 fw-bold ms-2">{{
                        personel.role.name
                      }}</span></a
                    >
                    <!--end::Name-->
                    <!--begin::Email-->
                    <div class="fw-bold text-muted">{{ personel.email }}</div>
                    <!--end::Email-->
                  </div>
                  <!--end::Details-->
                </div>
                <!--end::Details-->
              </div>
              <!--end::User-->
            </div>
            <!--end::List-->
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
export default {
  name: "ViewUsersModal",
  props: ["team"],
};
</script>
