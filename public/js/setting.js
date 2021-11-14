"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FileUploader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FileUploader.vue */ "./resources/js/components/FileUploader.vue");
/* harmony import */ var _layout_admin_PageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layout/admin/PageHeader.vue */ "./resources/js/layout/admin/PageHeader.vue");
/* harmony import */ var _layout_admin_PageFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layout/admin/PageFooter.vue */ "./resources/js/layout/admin/PageFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Setting",
  components: {
    FileUploader: _components_FileUploader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageHeader: _layout_admin_PageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PageFooter: _layout_admin_PageFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: {
        logo: null,
        favicon: null,
        title: null
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("loadSettings");
    this.form = {
      logo: this.settings.logo,
      favicon: this.settings.favicon,
      title: this.settings.title
    };
  },
  methods: {
    uploadLogo: function uploadLogo(file) {
      this.form.logo = file;
    },
    uploadFavicon: function uploadFavicon(file) {
      this.form.favicon = file;
    },
    postSettings: function postSettings() {
      var _this = this;

      this.$swal({
        icon: "success",
        title: "Ayarlar başarıyla kaydedildi!",
        showConfirmButton: false,
        timer: 1500
      }).then(function () {
        _this.$store.dispatch("postSettings", _this.form);
      });
    }
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    settings: "getSettings"
  })
});

/***/ }),

/***/ "./resources/js/pages/admin/setting.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/admin/setting.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setting_vue_vue_type_template_id_693e9e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=693e9e12& */ "./resources/js/pages/admin/setting.vue?vue&type=template&id=693e9e12&");
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/setting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_693e9e12___WEBPACK_IMPORTED_MODULE_0__.render,
  _setting_vue_vue_type_template_id_693e9e12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/setting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/setting.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/admin/setting.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/setting.vue?vue&type=template&id=693e9e12&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/setting.vue?vue&type=template&id=693e9e12& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_693e9e12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_693e9e12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_693e9e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./setting.vue?vue&type=template&id=693e9e12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting.vue?vue&type=template&id=693e9e12&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting.vue?vue&type=template&id=693e9e12&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/setting.vue?vue&type=template&id=693e9e12& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("page-header", { attrs: { pageTitle: "Site Ayarları" } }),
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
              _c("div", { staticClass: "card shadow-sm" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { enctype: "multipart/form-data" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.postSettings.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "form-label d-flex",
                                attrs: { for: "" }
                              },
                              [_vm._v("Logo")]
                            ),
                            _vm._v(" "),
                            _c("file-uploader", {
                              staticClass: "mb-5",
                              attrs: { image: _vm.settings.logo },
                              on: { loaded: _vm.uploadLogo }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "form-label d-flex",
                                attrs: { for: "" }
                              },
                              [_vm._v("Favicon")]
                            ),
                            _vm._v(" "),
                            _c("file-uploader", {
                              staticClass: "mb-5",
                              attrs: { image: _vm.settings.favicon },
                              on: { loaded: _vm.uploadFavicon }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mb-5" }, [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "title" }
                          },
                          [_vm._v("Başlık")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.title,
                              expression: "form.title"
                            }
                          ],
                          staticClass: "form-control form-control-solid",
                          attrs: { type: "text", placeholder: "Başlık" },
                          domProps: { value: _vm.form.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "title", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("page-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Proje Oluştur")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("\n              Ayarları Kaydet\n            ")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);