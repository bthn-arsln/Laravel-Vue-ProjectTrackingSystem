<template>
  <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
    <!--begin::Header-->
    <page-header :pageTitle="member.user.name" />
    <!--end::Header-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Container-->
      <div class="container-xxl" id="kt_content_container">
        <!--begin::Navbar-->
        <account-header :member="member" />
        <!--end::Navbar-->
        <!--begin::Modal - Project Search-->
        <assign-project-modal
          :personelId="member.user.id"
          :personelSlug="member.user.slug"
          :page="$route.query.page"
        />
        <!--end::Modal - Users Search-->
        <!--begin::details View-->
        <router-view />
        <!--end::details View-->
      </div>
      <!--end::Container-->
    </div>
    <!--begin::Footer-->
    <page-footer />
    <!--end::Footer-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageFooter from "@/layout/admin/PageFooter.vue";
import PageHeader from "@/layout/admin/PageHeader.vue";
import AccountHeader from "@/components/admin/account/AccountHeader.vue";
import AssignProjectModal from "@/components/admin/account/AssignProjectModal.vue";
export default {
  name: "Account",
  components: {
    PageHeader,
    PageFooter,
    AccountHeader,
    AssignProjectModal,
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: mapGetters({ member: "getMember" }),
  mounted() {
    this.$store.dispatch("loadMember", this.slug);
  },
};
</script>
