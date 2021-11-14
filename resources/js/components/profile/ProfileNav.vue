<template>
  <div class="d-flex overflow-auto h-55px">
    <ul
      class="
        nav nav-stretch nav-line-tabs nav-line-tabs-2x
        border-transparent
        fs-5
        fw-bolder
        flex-nowrap
      "
    >
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="src + slug"
          active-class="active"
          exact
          >Profil Bilgileri</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="src + slug + '/projects'"
          active-class="active"
          v-if="auth.user.role.name == 'Geliştirici'"
          >Projelerim</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="src + slug + '/edit'"
          active-class="active"
          >Ayarlar</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProfileNav",
  props: ["slug", "src"],
  computed: mapGetters({ auth: "getMyProfileInfo" }),
};
</script>
