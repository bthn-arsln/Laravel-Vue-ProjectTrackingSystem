<template>
  <div class="col-xl-3">
    <!--begin::Statistics Widget 5-->
    <router-link
      :to="src"
      class="card bg-danger hoverable card-xl-stretch mb-5 mb-xl-8"
    >
      <!--begin::Body-->
      <div class="card-body">
        <i class="fas fa-exclamation-circle fs-3x text-white"></i>
        <div class="text-white fw-bolder fs-2 mb-2 mt-5">
          {{ urgentCount }}
        </div>
        <div class="fw-bold text-white">{{ title }}</div>
      </div>
      <!--end::Body-->
    </router-link>
    <!--end::Statistics Widget 5-->
  </div>
</template>

<script>
export default {
  name: "UrgentProject",
  props: {
    title: String,
    urgentCount: Number,
    src: {
      String,
      default: "",
    },
  },
};
</script>
