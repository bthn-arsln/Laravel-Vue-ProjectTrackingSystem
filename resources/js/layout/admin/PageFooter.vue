<template>
  <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <!--begin::Container-->
    <div class="container-xxl d-flex flex-column flex-md-row flex-stack">
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-gray-400 fw-bold me-1">Created by</span>
        <a
          href="https://www.markapress.com/"
          target="_blank"
          class="text-muted text-hover-primary fw-bold me-2 fs-6"
          >{{ settings.title }}</a
        >
      </div>
      <!--end::Copyright-->
    </div>
    <!--end::Container-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PageFooter",
  mounted() {
    this.$store.dispatch("loadSettings");
  },
  computed: mapGetters({ settings: "getSettings" }),
};
</script>
