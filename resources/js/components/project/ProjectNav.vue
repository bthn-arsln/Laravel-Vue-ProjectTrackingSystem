<template>
  <div class="d-flex overflow-auto h-55px">
    <!--begin::Nav links-->
    <ul
      class="
        nav nav-stretch nav-line-tabs nav-line-tabs-2x
        border-transparent
        fs-5
        fw-bolder
        flex-nowrap
      "
    >
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="{ path: src + slug, params: { project: slug } }"
          active-class="active"
          exact
          >Teknik Şartname</router-link
        >
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="{
            path: src + slug + '/todos',
            params: { project: slug },
          }"
          active-class="active"
          >Proje Görevleri</router-link
        >
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="{
            path: src + slug + '/notes',
            params: { project: slug },
          }"
          active-class="active"
          >Proje Notları</router-link
        >
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="{
            path: src + slug + '/edit',
            params: { project: slug },
          }"
          active-class="active"
          v-if="auth.user.role.name == 'Proje Yöneticisi'"
          >Ayarlar</router-link
        >
      </li>
      <!--end::Nav item-->
    </ul>
    <!--end::Nav links-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProjectNav",
  props: ["slug", "src"],
  computed: mapGetters({ auth: "getMyProfileInfo" }),
};
</script>
