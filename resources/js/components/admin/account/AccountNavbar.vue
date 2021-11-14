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
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="{
            path: '/admin/account/' + member.user.slug,
            params: { slug: member.user.slug },
          }"
          active-class="active"
          exact
          >Profil Bilgileri</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-active-primary me-6"
          :to="{
            path: '/admin/account/' + member.user.slug + '/projects',
            params: { slug: member.user.slug },
          }"
          active-class="active"
          >Projeler</router-link
        >
      </li>
      <!--end::Nav item-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "AccountNavbar",
  props: ["member"],
};
</script>
