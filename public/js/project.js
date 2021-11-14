"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["project"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddNoteModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddNoteModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddNoteModal",
  props: {
    projectid: Number,
    projectSlug: String
  },
  data: function data() {
    return {
      authorId: JSON.parse(localStorage.getItem("user")).user.id,
      note: {
        title: null,
        description: null
      }
    };
  },
  validations: {
    note: {
      title: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required
      },
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required
      }
    }
  },
  methods: {
    addNote: function addNote() {
      var _this = this;

      if (this.note.title != null && this.note.description != null) {
        this.$store.dispatch("addNote", {
          authorId: this.authorId,
          projectId: this.projectid,
          projectSlug: this.projectSlug,
          title: this.note.title,
          description: this.note.description,
          page: this.$route.query.page,
          slug: this.projectSlug
        });
        this.$loading(true);
        setTimeout(function () {
          _this.$loading(false);
        }, 1500);
        this.note = {
          title: null,
          description: null
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddTodoModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddTodoModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddTodoModal",
  props: {
    projectid: Number,
    projectSlug: String
  },
  data: function data() {
    return {
      authorId: JSON.parse(localStorage.getItem("user")).user.id,
      todo: {
        text: null
      }
    };
  },
  validations: {
    todo: {
      text: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required
      }
    }
  },
  methods: {
    addTodo: function addTodo() {
      if (this.todo.text != null) {
        this.$store.dispatch("addTodo", {
          authorId: this.authorId,
          projectId: this.projectid,
          projectSlug: this.projectSlug,
          text: this.todo.text,
          page: this.$route.query.page,
          slug: this.projectSlug
        });
        this.todo = {
          text: null
        };
        location.reload();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddUserModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddUserModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddUserModal",
  props: ["projectId", "projectSlug", "team"],
  data: function data() {
    return {
      name: null,
      show: false
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("loadPersonel");
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    personel: "getPersonel"
  }),
  methods: {
    projectAddUser: function projectAddUser(personelId) {
      var _this = this;

      this.$store.dispatch("projectAddUser", {
        personelId: personelId,
        projectId: this.projectId,
        slug: this.projectSlug
      });
      this.$loading(true);
      setTimeout(function () {
        _this.$loading(false);
      }, 1500);
    }
  },
  watch: {
    name: function name(value) {
      this.$store.dispatch("searchPersonel", {
        name: value
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ViewUsersModal",
  props: ["team"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_project_modals_AddNoteModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/project-modals/AddNoteModal.vue */ "./resources/js/components/project-modals/AddNoteModal.vue");
/* harmony import */ var _components_project_modals_AddTodoModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/project-modals/AddTodoModal.vue */ "./resources/js/components/project-modals/AddTodoModal.vue");
/* harmony import */ var _components_project_modals_AddUserModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/project-modals/AddUserModal.vue */ "./resources/js/components/project-modals/AddUserModal.vue");
/* harmony import */ var _components_project_modals_ViewUsersModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/project-modals/ViewUsersModal.vue */ "./resources/js/components/project-modals/ViewUsersModal.vue");
/* harmony import */ var _ProjectNav_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectNav.vue */ "./resources/js/components/project/ProjectNav.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProjectHeader",
  props: ["project", "todoCount", "noteCount", "team", "teamCount", "src"],
  components: {
    ViewUsersModal: _components_project_modals_ViewUsersModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddUserModal: _components_project_modals_AddUserModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddTodoModal: _components_project_modals_AddTodoModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddNoteModal: _components_project_modals_AddNoteModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProjectNav: _ProjectNav_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)({
    auth: "getMyProfileInfo"
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectNav.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectNav.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProjectNav",
  props: ["slug", "src"],
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    auth: "getMyProfileInfo"
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/project/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/project/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _layout_admin_PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layout/admin/PageHeader */ "./resources/js/layout/admin/PageHeader.vue");
/* harmony import */ var _layout_admin_PageFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layout/admin/PageFooter */ "./resources/js/layout/admin/PageFooter.vue");
/* harmony import */ var _components_project_ProjectHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/project/ProjectHeader */ "./resources/js/components/project/ProjectHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProjectDetail",
  components: {
    PageHeader: _layout_admin_PageHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageFooter: _layout_admin_PageFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProjectHeader: _components_project_ProjectHeader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      slug: this.$route.params.project
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    projectDetail: "getProject"
  }),
  mounted: function mounted() {
    this.$store.dispatch("loadProject", this.slug);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developer/project/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developer/project/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_developer_PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layout/developer/PageHeader */ "./resources/js/layout/developer/PageHeader.vue");
/* harmony import */ var _layout_developer_PageFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layout/developer/PageFooter */ "./resources/js/layout/developer/PageFooter.vue");
/* harmony import */ var _components_project_ProjectHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/project/ProjectHeader */ "./resources/js/components/project/ProjectHeader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProjectDetail",
  components: {
    PageHeader: _layout_developer_PageHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageFooter: _layout_developer_PageFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProjectHeader: _components_project_ProjectHeader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      slug: this.$route.params.project
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    projectDetail: "getProject"
  }),
  mounted: function mounted() {
    this.$store.dispatch("loadProject", this.slug);
  }
});

/***/ }),

/***/ "./resources/js/components/project-modals/AddNoteModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/project-modals/AddNoteModal.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddNoteModal_vue_vue_type_template_id_3bd47b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNoteModal.vue?vue&type=template&id=3bd47b34& */ "./resources/js/components/project-modals/AddNoteModal.vue?vue&type=template&id=3bd47b34&");
/* harmony import */ var _AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNoteModal.vue?vue&type=script&lang=js& */ "./resources/js/components/project-modals/AddNoteModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNoteModal_vue_vue_type_template_id_3bd47b34___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddNoteModal_vue_vue_type_template_id_3bd47b34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project-modals/AddNoteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/project-modals/AddTodoModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/project-modals/AddTodoModal.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddTodoModal_vue_vue_type_template_id_0f79e160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTodoModal.vue?vue&type=template&id=0f79e160& */ "./resources/js/components/project-modals/AddTodoModal.vue?vue&type=template&id=0f79e160&");
/* harmony import */ var _AddTodoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTodoModal.vue?vue&type=script&lang=js& */ "./resources/js/components/project-modals/AddTodoModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddTodoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddTodoModal_vue_vue_type_template_id_0f79e160___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddTodoModal_vue_vue_type_template_id_0f79e160___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project-modals/AddTodoModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/project-modals/AddUserModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/project-modals/AddUserModal.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUserModal_vue_vue_type_template_id_e2f6f90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUserModal.vue?vue&type=template&id=e2f6f90a& */ "./resources/js/components/project-modals/AddUserModal.vue?vue&type=template&id=e2f6f90a&");
/* harmony import */ var _AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUserModal.vue?vue&type=script&lang=js& */ "./resources/js/components/project-modals/AddUserModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddUserModal_vue_vue_type_template_id_e2f6f90a___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUserModal_vue_vue_type_template_id_e2f6f90a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project-modals/AddUserModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/project-modals/ViewUsersModal.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/project-modals/ViewUsersModal.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewUsersModal_vue_vue_type_template_id_141e4284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewUsersModal.vue?vue&type=template&id=141e4284& */ "./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=template&id=141e4284&");
/* harmony import */ var _ViewUsersModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewUsersModal.vue?vue&type=script&lang=js& */ "./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewUsersModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewUsersModal_vue_vue_type_template_id_141e4284___WEBPACK_IMPORTED_MODULE_0__.render,
  _ViewUsersModal_vue_vue_type_template_id_141e4284___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project-modals/ViewUsersModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/project/ProjectHeader.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/project/ProjectHeader.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectHeader_vue_vue_type_template_id_fde62d96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectHeader.vue?vue&type=template&id=fde62d96& */ "./resources/js/components/project/ProjectHeader.vue?vue&type=template&id=fde62d96&");
/* harmony import */ var _ProjectHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/project/ProjectHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectHeader_vue_vue_type_template_id_fde62d96___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectHeader_vue_vue_type_template_id_fde62d96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project/ProjectHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/project/ProjectNav.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/project/ProjectNav.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectNav_vue_vue_type_template_id_3ef739ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectNav.vue?vue&type=template&id=3ef739ab& */ "./resources/js/components/project/ProjectNav.vue?vue&type=template&id=3ef739ab&");
/* harmony import */ var _ProjectNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectNav.vue?vue&type=script&lang=js& */ "./resources/js/components/project/ProjectNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectNav_vue_vue_type_template_id_3ef739ab___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectNav_vue_vue_type_template_id_3ef739ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project/ProjectNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/project/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/admin/project/index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_cd1a107a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cd1a107a& */ "./resources/js/pages/admin/project/index.vue?vue&type=template&id=cd1a107a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/project/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_cd1a107a___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_cd1a107a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/project/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/developer/project/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/developer/project/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_264173fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=264173fe& */ "./resources/js/pages/developer/project/index.vue?vue&type=template&id=264173fe&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/developer/project/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_264173fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_264173fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/developer/project/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/project-modals/AddNoteModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/project-modals/AddNoteModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddNoteModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddNoteModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project-modals/AddTodoModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/project-modals/AddTodoModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddTodoModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddTodoModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project-modals/AddUserModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/project-modals/AddUserModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUserModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddUserModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewUsersModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewUsersModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewUsersModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project/ProjectHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/project/ProjectHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project/ProjectNav.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/project/ProjectNav.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/project/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/project/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/project/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/developer/project/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/developer/project/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developer/project/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project-modals/AddNoteModal.vue?vue&type=template&id=3bd47b34&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/project-modals/AddNoteModal.vue?vue&type=template&id=3bd47b34& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_template_id_3bd47b34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_template_id_3bd47b34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNoteModal_vue_vue_type_template_id_3bd47b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddNoteModal.vue?vue&type=template&id=3bd47b34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddNoteModal.vue?vue&type=template&id=3bd47b34&");


/***/ }),

/***/ "./resources/js/components/project-modals/AddTodoModal.vue?vue&type=template&id=0f79e160&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/project-modals/AddTodoModal.vue?vue&type=template&id=0f79e160& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodoModal_vue_vue_type_template_id_0f79e160___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodoModal_vue_vue_type_template_id_0f79e160___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTodoModal_vue_vue_type_template_id_0f79e160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddTodoModal.vue?vue&type=template&id=0f79e160& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddTodoModal.vue?vue&type=template&id=0f79e160&");


/***/ }),

/***/ "./resources/js/components/project-modals/AddUserModal.vue?vue&type=template&id=e2f6f90a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/project-modals/AddUserModal.vue?vue&type=template&id=e2f6f90a& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_template_id_e2f6f90a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_template_id_e2f6f90a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUserModal_vue_vue_type_template_id_e2f6f90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUserModal.vue?vue&type=template&id=e2f6f90a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddUserModal.vue?vue&type=template&id=e2f6f90a&");


/***/ }),

/***/ "./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=template&id=141e4284&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=template&id=141e4284& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewUsersModal_vue_vue_type_template_id_141e4284___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewUsersModal_vue_vue_type_template_id_141e4284___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewUsersModal_vue_vue_type_template_id_141e4284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewUsersModal.vue?vue&type=template&id=141e4284& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=template&id=141e4284&");


/***/ }),

/***/ "./resources/js/components/project/ProjectHeader.vue?vue&type=template&id=fde62d96&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/project/ProjectHeader.vue?vue&type=template&id=fde62d96& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_fde62d96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_fde62d96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_fde62d96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectHeader.vue?vue&type=template&id=fde62d96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectHeader.vue?vue&type=template&id=fde62d96&");


/***/ }),

/***/ "./resources/js/components/project/ProjectNav.vue?vue&type=template&id=3ef739ab&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/project/ProjectNav.vue?vue&type=template&id=3ef739ab& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNav_vue_vue_type_template_id_3ef739ab___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNav_vue_vue_type_template_id_3ef739ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectNav_vue_vue_type_template_id_3ef739ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectNav.vue?vue&type=template&id=3ef739ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectNav.vue?vue&type=template&id=3ef739ab&");


/***/ }),

/***/ "./resources/js/pages/admin/project/index.vue?vue&type=template&id=cd1a107a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin/project/index.vue?vue&type=template&id=cd1a107a& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cd1a107a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cd1a107a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cd1a107a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=cd1a107a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/project/index.vue?vue&type=template&id=cd1a107a&");


/***/ }),

/***/ "./resources/js/pages/developer/project/index.vue?vue&type=template&id=264173fe&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/developer/project/index.vue?vue&type=template&id=264173fe& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_264173fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_264173fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_264173fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=264173fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developer/project/index.vue?vue&type=template&id=264173fe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddNoteModal.vue?vue&type=template&id=3bd47b34&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddNoteModal.vue?vue&type=template&id=3bd47b34& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: { id: "kt_modal_new_note", tabindex: "-1", "aria-hidden": "true" }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-dialog-centered mw-650px" },
        [
          _c("div", { staticClass: "modal-content rounded" }, [
            _c(
              "div",
              { staticClass: "modal-header pb-0 border-0 justify-content-end" },
              [
                _c(
                  "div",
                  {
                    staticClass: "btn btn-sm btn-icon btn-active-color-primary",
                    attrs: { "data-bs-dismiss": "modal" }
                  },
                  [
                    _c("span", { staticClass: "svg-icon svg-icon-1" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }
                        },
                        [
                          _c("rect", {
                            attrs: {
                              opacity: "0.5",
                              x: "6",
                              y: "17.3137",
                              width: "16",
                              height: "2",
                              rx: "1",
                              transform: "rotate(-45 6 17.3137)",
                              fill: "black"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: {
                              x: "7.41422",
                              y: "6",
                              width: "16",
                              height: "2",
                              rx: "1",
                              transform: "rotate(45 7.41422 6)",
                              fill: "black"
                            }
                          })
                        ]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body scroll-y px-10 px-lg-15 pt-0 pb-15" },
              [
                _c(
                  "form",
                  {
                    staticClass: "form",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.addNote.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex flex-column mb-8 fv-row" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        !_vm.$v.note.title.required
                          ? _c(
                              "small",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n              * Başlık bilgisi boş bırakılamaz!\n            "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.note.title,
                              expression: "note.title"
                            }
                          ],
                          staticClass: "form-control form-control-solid",
                          attrs: { type: "text", placeholder: "Not Başlık" },
                          domProps: { value: _vm.note.title },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.note, "title", $event.target.value)
                              },
                              function($event) {
                                return _vm.$v.note.title.$touch()
                              }
                            ]
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex flex-column mb-8 fv-row" },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        !_vm.$v.note.description.required
                          ? _c(
                              "small",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n              * İçerik bilgisi boş bırakılamaz!\n            "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.note.description,
                              expression: "note.description"
                            }
                          ],
                          staticClass: "form-control form-control-solid",
                          attrs: {
                            type: "text",
                            placeholder: "Not Başlık",
                            rows: "4"
                          },
                          domProps: { value: _vm.note.description },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.note,
                                  "description",
                                  $event.target.value
                                )
                              },
                              function($event) {
                                return _vm.$v.note.description.$touch()
                              }
                            ]
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-13 text-center" }, [
      _c("h1", { staticClass: "mb-3" }, [_vm._v("Yeni Not Oluştur")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "d-flex align-items-center fs-6 fw-bold mb-2" },
      [_c("span", [_vm._v("Not Başlık")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "d-flex align-items-center fs-6 fw-bold mb-2" },
      [_c("span", [_vm._v("Not İçerik")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            type: "submit",
            id: "kt_modal_new_target_submit",
            "data-bs-dismiss": "modal"
          }
        },
        [
          _c("span", { staticClass: "indicator-label" }, [_vm._v("Kaydet")]),
          _vm._v(" "),
          _c("span", { staticClass: "indicator-progress" }, [
            _vm._v("Lütfen Bekleyin...\n                "),
            _c("span", {
              staticClass: "spinner-border spinner-border-sm align-middle ms-2"
            })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddTodoModal.vue?vue&type=template&id=0f79e160&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddTodoModal.vue?vue&type=template&id=0f79e160& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "kt_modal_new_target",
        tabindex: "-1",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-dialog-centered mw-650px" },
        [
          _c("div", { staticClass: "modal-content rounded" }, [
            _c(
              "div",
              { staticClass: "modal-header pb-0 border-0 justify-content-end" },
              [
                _c(
                  "div",
                  {
                    staticClass: "btn btn-sm btn-icon btn-active-color-primary",
                    attrs: { "data-bs-dismiss": "modal" }
                  },
                  [
                    _c("span", { staticClass: "svg-icon svg-icon-1" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }
                        },
                        [
                          _c("rect", {
                            attrs: {
                              opacity: "0.5",
                              x: "6",
                              y: "17.3137",
                              width: "16",
                              height: "2",
                              rx: "1",
                              transform: "rotate(-45 6 17.3137)",
                              fill: "black"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: {
                              x: "7.41422",
                              y: "6",
                              width: "16",
                              height: "2",
                              rx: "1",
                              transform: "rotate(45 7.41422 6)",
                              fill: "black"
                            }
                          })
                        ]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body scroll-y px-10 px-lg-15 pt-0 pb-15" },
              [
                _c(
                  "form",
                  {
                    staticClass: "form",
                    attrs: { id: "kt_modal_new_target_form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.addTodo.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex flex-column mb-8 fv-row" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        !_vm.$v.todo.text.required
                          ? _c(
                              "small",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  "\n              * Görev bilgisi boş bırakılamaz!\n            "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.todo.text,
                              expression: "todo.text"
                            }
                          ],
                          staticClass: "form-control form-control-solid",
                          attrs: { type: "text", placeholder: "Görev İçeriği" },
                          domProps: { value: _vm.todo.text },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.todo, "text", $event.target.value)
                              },
                              function($event) {
                                return _vm.$v.todo.text.$touch()
                              }
                            ]
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(2)
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-13 text-center" }, [
      _c("h1", { staticClass: "mb-3" }, [_vm._v("Yeni Görev Oluştur")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "d-flex align-items-center fs-6 fw-bold mb-2" },
      [_c("span", [_vm._v("Görev İçeriği")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            type: "submit",
            id: "kt_modal_new_target_submit",
            "data-bs-dismiss": "modal"
          }
        },
        [
          _c("span", { staticClass: "indicator-label" }, [_vm._v("Kaydet")]),
          _vm._v(" "),
          _c("span", { staticClass: "indicator-progress" }, [
            _vm._v("Lütfen Bekleyin...\n                "),
            _c("span", {
              staticClass: "spinner-border spinner-border-sm align-middle ms-2"
            })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddUserModal.vue?vue&type=template&id=e2f6f90a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/AddUserModal.vue?vue&type=template&id=e2f6f90a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "kt_modal_users_search",
        tabindex: "-1",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-dialog-centered mw-650px" },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c(
              "div",
              { staticClass: "modal-header pb-0 border-0 justify-content-end" },
              [
                _c(
                  "div",
                  {
                    staticClass: "btn btn-sm btn-icon btn-active-color-primary",
                    attrs: { "data-bs-dismiss": "modal" }
                  },
                  [
                    _c("span", { staticClass: "svg-icon svg-icon-1" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }
                        },
                        [
                          _c("rect", {
                            attrs: {
                              opacity: "0.5",
                              x: "6",
                              y: "17.3137",
                              width: "16",
                              height: "2",
                              rx: "1",
                              transform: "rotate(-45 6 17.3137)",
                              fill: "black"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: {
                              x: "7.41422",
                              y: "6",
                              width: "16",
                              height: "2",
                              rx: "1",
                              transform: "rotate(45 7.41422 6)",
                              fill: "black"
                            }
                          })
                        ]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    attrs: {
                      id: "kt_modal_users_search_handler",
                      "data-kt-search-keypress": "true",
                      "data-kt-search-min-length": "2",
                      "data-kt-search-enter": "enter",
                      "data-kt-search-layout": "inline"
                    }
                  },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "w-100 position-relative mb-5",
                        attrs: {
                          "data-kt-search-element": "form",
                          autocomplete: "off"
                        }
                      },
                      [
                        _c("input", { attrs: { type: "hidden" } }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "\n                svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500\n                position-absolute\n                top-50\n                ms-5\n                translate-middle-y\n              "
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none"
                                }
                              },
                              [
                                _c("rect", {
                                  attrs: {
                                    opacity: "0.5",
                                    x: "17.0365",
                                    y: "15.1223",
                                    width: "8.15546",
                                    height: "2",
                                    rx: "1",
                                    transform: "rotate(45 17.0365 15.1223)",
                                    fill: "black"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z",
                                    fill: "black"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          staticClass:
                            "form-control form-control-lg form-control-solid px-15",
                          attrs: {
                            type: "text",
                            placeholder: "Ada göre ara...",
                            "data-kt-search-element": "input"
                          },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "\n                btn btn-flush btn-active-color-primary\n                position-absolute\n                top-50\n                end-0\n                translate-middle-y\n                lh-0\n                me-5\n                d-none\n              ",
                            attrs: { "data-kt-search-element": "clear" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-2 svg-icon-lg-1 me-0"
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none"
                                    }
                                  },
                                  [
                                    _c("rect", {
                                      attrs: {
                                        opacity: "0.5",
                                        x: "6",
                                        y: "17.3137",
                                        width: "16",
                                        height: "2",
                                        rx: "1",
                                        transform: "rotate(-45 6 17.3137)",
                                        fill: "black"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("rect", {
                                      attrs: {
                                        x: "7.41422",
                                        y: "6",
                                        width: "16",
                                        height: "2",
                                        rx: "1",
                                        transform: "rotate(45 7.41422 6)",
                                        fill: "black"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "py-5" }, [
                      _c(
                        "div",
                        { attrs: { "data-kt-search-element": "suggestions" } },
                        [
                          _c("h3", { staticClass: "fw-bold mb-5" }, [
                            _vm._v("Personel:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mh-375px scroll-y me-n7 pe-7" },
                            _vm._l(_vm.personel, function(user, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass:
                                    "d-flex align-items-center p-3 rounded mb-1"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "symbol symbol-35px symbol-circle me-5"
                                    },
                                    [
                                      _c("img", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: user.image,
                                            expression: "user.image"
                                          }
                                        ],
                                        attrs: {
                                          alt: user.name,
                                          src: user.image
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !user.image,
                                              expression: "!user.image"
                                            }
                                          ],
                                          staticClass:
                                            "\n                        symbol-label\n                        bg-primary\n                        text-inverse-primary\n                        fw-bolder\n                      "
                                        },
                                        [_vm._v(_vm._s(user.name.charAt(0)))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "fw-bold w-400px" },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "fs-6 text-gray-800 me-2"
                                        },
                                        [_vm._v(_vm._s(user.name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "badge badge-light" },
                                        [_vm._v(_vm._s(user.role.name))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-light btn-sm",
                                      attrs: { "data-bs-dismiss": "modal" },
                                      on: {
                                        click: function($event) {
                                          return _vm.projectAddUser(user.id)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Ekle\n                  "
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-13" }, [
      _c("h1", { staticClass: "mb-3" }, [_vm._v("Personel Ara")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-muted fw-bold fs-5" }, [
        _vm._v(
          "\n            Projeye bir personel atamak için aşağıdan personel seçin\n          "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass:
          "\n                position-absolute\n                top-50\n                end-0\n                translate-middle-y\n                lh-0\n                d-none\n                me-5\n              ",
        attrs: { "data-kt-search-element": "spinner" }
      },
      [
        _c("span", {
          staticClass: "spinner-border h-15px w-15px align-middle text-muted"
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=template&id=141e4284&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project-modals/ViewUsersModal.vue?vue&type=template&id=141e4284& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "kt_modal_view_users",
        tabindex: "-1",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog mw-650px" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "div",
            { staticClass: "modal-header pb-0 border-0 justify-content-end" },
            [
              _c(
                "div",
                {
                  staticClass: "btn btn-sm btn-icon btn-active-color-primary",
                  attrs: { "data-bs-dismiss": "modal" }
                },
                [
                  _c("span", { staticClass: "svg-icon svg-icon-1" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none"
                        }
                      },
                      [
                        _c("rect", {
                          attrs: {
                            opacity: "0.5",
                            x: "6",
                            y: "17.3137",
                            width: "16",
                            height: "2",
                            rx: "1",
                            transform: "rotate(-45 6 17.3137)",
                            fill: "black"
                          }
                        }),
                        _vm._v(" "),
                        _c("rect", {
                          attrs: {
                            x: "7.41422",
                            y: "6",
                            width: "16",
                            height: "2",
                            rx: "1",
                            transform: "rotate(45 7.41422 6)",
                            fill: "black"
                          }
                        })
                      ]
                    )
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15" },
            [
              _c("div", { staticClass: "text-center mb-13" }, [
                _c("h1", { staticClass: "mb-3" }, [
                  _vm._v("Personele Göz Atın")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-muted fw-bold fs-5" },
                  [
                    _vm._v(
                      "\n            Daha fazla bilgiye ihtiyacınız varsa, lütfen\n            "
                    ),
                    _c("router-link", { attrs: { to: { name: "Team" } } }, [
                      _vm._v("Personel Listesine")
                    ]),
                    _vm._v("\n            bakın.\n          ")
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-15" }, [
                _c(
                  "div",
                  { staticClass: "mh-375px scroll-y me-n7 pe-7" },
                  _vm._l(_vm.team, function(personel, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass:
                          "\n                d-flex\n                flex-stack\n                py-5\n                border-bottom border-gray-300 border-bottom-dashed\n              "
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "symbol symbol-35px symbol-circle"
                              },
                              [
                                _c("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: personel.image,
                                      expression: "personel.image"
                                    }
                                  ],
                                  attrs: {
                                    alt: personel.name,
                                    src: personel.image
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !personel.image,
                                        expression: "!personel.image"
                                      }
                                    ],
                                    staticClass:
                                      "\n                      symbol-label\n                      bg-primary\n                      text-inverse-primary\n                      fw-bolder\n                    "
                                  },
                                  [_vm._v(_vm._s(personel.name.charAt(0)))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "ms-6" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "\n                      d-flex\n                      align-items-center\n                      fs-5\n                      fw-bolder\n                      text-dark text-hover-primary\n                    ",
                                  attrs: { href: "#" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(personel.name) +
                                      "\n                    "
                                  ),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "badge badge-light fs-8 fw-bold ms-2"
                                    },
                                    [_vm._v(_vm._s(personel.role.name))]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "fw-bold text-muted" }, [
                                _vm._v(_vm._s(personel.email))
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectHeader.vue?vue&type=template&id=fde62d96&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectHeader.vue?vue&type=template&id=fde62d96& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card mb-6 mb-xl-9" },
    [
      _c(
        "div",
        { staticClass: "card-body pt-9 pb-0" },
        [
          _c("div", { staticClass: "d-flex flex-wrap flex-sm-nowrap mb-6" }, [
            _c(
              "div",
              {
                staticClass:
                  "\n          d-flex\n          flex-center flex-shrink-0\n          bg-light\n          rounded\n          w-100px\n          h-100px\n          w-lg-150px\n          h-lg-150px\n          me-7\n          mb-4\n        "
              },
              [
                _c("img", {
                  staticClass: "mw-50px mw-lg-75px",
                  attrs: { src: _vm.project.image, alt: "image" }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex-grow-1" }, [
              _c(
                "div",
                {
                  staticClass:
                    "\n            d-flex\n            justify-content-between\n            align-items-start\n            flex-wrap\n            mb-2\n          "
                },
                [
                  _c("div", { staticClass: "d-flex flex-column" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-1" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "text-gray-800 text-hover-primary fs-2 fw-bolder me-3",
                            attrs: { href: "#" }
                          },
                          [_vm._v(_vm._s(_vm.project.title))]
                        ),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "badge badge-light-success me-auto"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.project.description) +
                            "\n            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex mb-4" }, [
                    _vm.auth.user.role.name == "Proje Yöneticisi"
                      ? _c(
                          "a",
                          {
                            staticClass:
                              "btn btn-sm btn-bg-light btn-active-color-primary me-3",
                            attrs: {
                              href: "#",
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#kt_modal_users_search"
                            }
                          },
                          [_vm._v("Personel Ekle")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-primary me-3",
                        attrs: {
                          href: "#",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#kt_modal_new_target"
                        }
                      },
                      [_vm._v("Görev Ekle")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-success me-3",
                        attrs: {
                          href: "#",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#kt_modal_new_note",
                          "data-kt-menu-trigger": "click",
                          "data-kt-menu-placement": "bottom-end"
                        }
                      },
                      [_vm._v("\n              Not Ekle\n            ")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-wrap justify-content-start" },
                [
                  _c("div", { staticClass: "d-flex flex-wrap" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n                border border-gray-300 border-dashed\n                rounded\n                min-w-125px\n                py-3\n                px-4\n                me-6\n                mb-3\n              "
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("div", { staticClass: "fs-4 fw-bolder" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm._f("diffForHumans")(
                                      _vm.project.finished_date
                                    )
                                  ) +
                                  "\n                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "fw-bold fs-6 text-gray-400" },
                          [_vm._v("Bitiş Tarihi")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n                border border-gray-300 border-dashed\n                rounded\n                min-w-125px\n                py-3\n                px-4\n                me-6\n                mb-3\n              "
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _vm._m(0),
                            _vm._v(" "),
                            _c("div", { staticClass: "fs-4 fw-bolder" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.todoCount) +
                                  "\n                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "fw-bold fs-6 text-gray-400" },
                          [_vm._v("Görevler")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n                border border-gray-300 border-dashed\n                rounded\n                min-w-125px\n                py-3\n                px-4\n                me-6\n                mb-3\n              "
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", { staticClass: "fs-4 fw-bolder" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.noteCount) +
                                  "\n                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "fw-bold fs-6 text-gray-400" },
                          [_vm._v("Notlar")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "symbol-group symbol-hover mb-3" },
                    [
                      _vm._l(_vm.project.team.slice(0, 7), function(
                        personel,
                        index
                      ) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "symbol symbol-35px symbol-circle",
                            attrs: {
                              "data-bs-toggle": "tooltip",
                              title: personel.name
                            }
                          },
                          [
                            _c("img", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: personel.image,
                                  expression: "personel.image"
                                }
                              ],
                              attrs: { alt: personel.name, src: personel.image }
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !personel.image,
                                    expression: "!personel.image"
                                  }
                                ],
                                staticClass:
                                  "symbol-label bg-primary text-inverse-primary fw-bolder"
                              },
                              [_vm._v(_vm._s(personel.name.charAt(0)))]
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.teamCount > 7
                        ? _c(
                            "a",
                            {
                              staticClass: "symbol symbol-35px symbol-circle",
                              attrs: {
                                href: "#",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#kt_modal_view_users"
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "symbol-label bg-dark text-inverse-dark fs-8 fw-bolder",
                                  attrs: {
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-trigger": "hover",
                                    title: "Daha fazla kullanıcı görüntüle"
                                  }
                                },
                                [_vm._v("+" + _vm._s(_vm.teamCount - 7))]
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("project-nav", { attrs: { slug: _vm.project.slug, src: _vm.src } })
        ],
        1
      ),
      _vm._v(" "),
      _c("view-users-modal", { attrs: { team: _vm.project.team } }),
      _vm._v(" "),
      _c("add-user-modal", {
        attrs: {
          projectId: _vm.project.id,
          projectSlug: _vm.project.slug,
          team: _vm.project.team
        }
      }),
      _vm._v(" "),
      _c("add-todo-modal", {
        attrs: { projectid: _vm.project.id, projectSlug: _vm.project.slug }
      }),
      _vm._v(" "),
      _c("add-note-modal", {
        attrs: { projectid: _vm.project.id, projectSlug: _vm.project.slug }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticClass: "svg-icon svg-icon-3 svg-icon-danger me-2" },
      [_c("i", { staticClass: "fas fa-tasks fs-4 text-primary" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticClass: "svg-icon svg-icon-3 svg-icon-success me-2" },
      [_c("i", { staticClass: "fas fa-sticky-note fs-4 text-primary" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectNav.vue?vue&type=template&id=3ef739ab&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/project/ProjectNav.vue?vue&type=template&id=3ef739ab& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "d-flex overflow-auto h-55px" }, [
    _c(
      "ul",
      {
        staticClass:
          "\n      nav nav-stretch nav-line-tabs nav-line-tabs-2x\n      border-transparent\n      fs-5\n      fw-bolder\n      flex-nowrap\n    "
      },
      [
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-link text-active-primary me-6",
                attrs: {
                  to: {
                    path: _vm.src + _vm.slug,
                    params: { project: _vm.slug }
                  },
                  "active-class": "active",
                  exact: ""
                }
              },
              [_vm._v("Teknik Şartname")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-link text-active-primary me-6",
                attrs: {
                  to: {
                    path: _vm.src + _vm.slug + "/todos",
                    params: { project: _vm.slug }
                  },
                  "active-class": "active"
                }
              },
              [_vm._v("Proje Görevleri")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-link text-active-primary me-6",
                attrs: {
                  to: {
                    path: _vm.src + _vm.slug + "/notes",
                    params: { project: _vm.slug }
                  },
                  "active-class": "active"
                }
              },
              [_vm._v("Proje Notları")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _vm.auth.user.role.name == "Proje Yöneticisi"
              ? _c(
                  "router-link",
                  {
                    staticClass: "nav-link text-active-primary me-6",
                    attrs: {
                      to: {
                        path: _vm.src + _vm.slug + "/edit",
                        params: { project: _vm.slug }
                      },
                      "active-class": "active"
                    }
                  },
                  [_vm._v("Ayarlar")]
                )
              : _vm._e()
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/project/index.vue?vue&type=template&id=cd1a107a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/project/index.vue?vue&type=template&id=cd1a107a& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "wrapper d-flex flex-column flex-row-fluid",
      attrs: { id: "kt_wrapper" }
    },
    [
      _c("page-header", {
        attrs: { pageTitle: _vm.projectDetail.project.title }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content d-flex flex-column flex-column-fluid",
          attrs: { id: "kt_content" }
        },
        [
          _c(
            "div",
            {
              staticClass: "container-xxl",
              attrs: { id: "kt_content_container" }
            },
            [
              _c("project-header", {
                attrs: {
                  project: _vm.projectDetail.project,
                  todoCount: _vm.projectDetail.todoCount,
                  noteCount: _vm.projectDetail.noteCount,
                  team: _vm.projectDetail.team,
                  teamCount: _vm.projectDetail.teamCount,
                  src: "/admin/project/"
                }
              }),
              _vm._v(" "),
              _c("router-view")
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("page-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developer/project/index.vue?vue&type=template&id=264173fe&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/developer/project/index.vue?vue&type=template&id=264173fe& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "wrapper d-flex flex-column flex-row-fluid",
      attrs: { id: "kt_wrapper" }
    },
    [
      _c("page-header", {
        attrs: { pageTitle: _vm.projectDetail.project.title }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content d-flex flex-column flex-column-fluid",
          attrs: { id: "kt_content" }
        },
        [
          _c(
            "div",
            {
              staticClass: "container-xxl",
              attrs: { id: "kt_content_container" }
            },
            [
              _c("project-header", {
                attrs: {
                  project: _vm.projectDetail.project,
                  todoCount: _vm.projectDetail.todoCount,
                  noteCount: _vm.projectDetail.noteCount,
                  team: _vm.projectDetail.team,
                  teamCount: _vm.projectDetail.teamCount,
                  src: "/project/"
                }
              }),
              _vm._v(" "),
              _c("router-view")
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("page-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);