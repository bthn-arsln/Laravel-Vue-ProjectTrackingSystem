<template>
  <!--begin::Page-->
  <div class="page d-flex flex-row flex-column-fluid">
    <!--begin::Aside-->
    <page-aside />
    <!--end::Aside-->
    <!--begin::Wrapper-->
    <router-view />
    <!--end::Wrapper-->
    <!--begin::Modals-->
    <!--begin::Modal - Add Personel-->
    <add-personel-modal />
    <!--end::Modal -Add Personel-->
    <!--begin::Modal - Create App-->
    <create-project-modal />
    <!--end::Modal - Create App-->
    <!--begin::Modal - Add Role-->
    <add-role-modal />
    <!--end::Modal - Add Role-->
    <!--end::Modals-->
  </div>
  <!--end::Page-->
</template>

<script>
import PageAside from "@/layout/admin/PageAside";
import CreateProjectModal from "./components/admin/modals/CreateProjectModal";
import AddPersonelModal from "./components/admin/modals/AddPersonelModal";
import AddRoleModal from "./components/admin/modals/AddRoleModal";
export default {
  name: "AdminLayout",
  components: {
    PageAside,
    CreateProjectModal,
    AddPersonelModal,
    AddRoleModal,
  },
};
</script>
