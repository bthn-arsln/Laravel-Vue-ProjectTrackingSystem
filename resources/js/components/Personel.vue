<template>
  <tr>
    <td>
      <div class="d-flex align-items-center">
        <div class="symbol symbol-50px me-5">
          <span class="symbol-label bg-light">
            <img
              :src="personel.image"
              class="h-75 align-self-end"
              :alt="personel.name"
              v-show="personel.image"
            />
            <span
              class="symbol-label bg-primary text-inverse-primary fw-bolder h2"
              v-show="!personel.image"
              >{{ personel.name.charAt(0) }}</span
            >
          </span>
        </div>
        <div class="d-flex justify-content-start flex-column">
          <router-link
            :to="{
              path: '/admin/account/' + personel.slug,
              params: { slug: personel.slug },
            }"
            class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
            >{{ personel.name }}</router-link
          >
          <span class="text-muted fw-bold text-muted d-block fs-7">{{
            personel.role.name
          }}</span>
        </div>
      </div>
    </td>
    <td>
      <span class="text-muted fw-bold text-muted d-block fs-7">{{
        personel.email
      }}</span>
    </td>
    <td>
      <span class="text-muted fw-bold text-muted d-block fs-7">{{
        personel.phone
      }}</span>
    </td>
    <td class="text-end">
      <div class="d-flex justify-content-end flex-shrink-0">
        <router-link
          :to="{
            path: '/admin/account/' + personel.slug,
            params: { slug: personel.slug },
          }"
          class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
        >
          <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
          <span class="svg-icon svg-icon-3">
            <i class="fas fa-eye"></i>
          </span>
          <!--end::Svg Icon-->
        </router-link>
        <button
          @click="deletePersonel(personel.id)"
          class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1"
        >
          <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
          <span class="svg-icon svg-icon-3">
            <i class="fas fa-trash"></i>
          </span>
          <!--end::Svg Icon-->
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Personel",
  props: ["personel"],
  methods: {
    deletePersonel(id) {
      this.$store.dispatch("deletePersonel", id);
    },
  },
};
</script>
