<template>
  <!--begin::Page-->
  <div class="page d-flex flex-row flex-column-fluid">
    <!--begin::Aside-->
    <page-aside />
    <!--end::Aside-->
    <!--begin::Wrapper-->
    <router-view />
    <!--end::Wrapper-->
  </div>
  <!--end::Page-->
</template>

<script>
import PageAside from "@/layout/developer/aside";
export default {
  name: "DeveloperLayout",
  components: {
    PageAside,
  },
};
</script>
