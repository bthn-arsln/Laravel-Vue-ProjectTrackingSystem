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
      <!--begin::Menu-->
      <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
        <li class="menu-item">
          <a
            href="https://keenthemes.com/"
            target="_blank"
            class="menu-link px-2"
            >About</a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://keenthemes.com/support"
            target="_blank"
            class="menu-link px-2"
            >Support</a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://1.envato.market/EA4JP"
            target="_blank"
            class="menu-link px-2"
            >Purchase</a
          >
        </li>
      </ul>
      <!--end::Menu-->
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
