<template>
  <div
    class="
      border border-gray-300 border-dashed
      rounded
      min-w-125px
      py-3
      px-4
      me-6
      mb-3
    "
  >
    <!--begin::Number-->
    <div class="d-flex align-items-center">
      <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
      <span class="svg-icon svg-icon-3 svg-icon-success me-2">
        <i class="fas fa-clipboard-check fs-3 text-primary"></i>
      </span>
      <!--end::Svg Icon-->
      <div class="fs-2 fw-bolder">
        {{ finishCount }}
      </div>
    </div>
    <!--end::Number-->
    <!--begin::Label-->
    <div class="fw-bold fs-6 text-gray-400">{{ title }}</div>
    <!--end::Label-->
  </div>
</template>

<script>
export default {
  name: "FinishProject",
  props: {
    title: String,
    finishCount: Number,
  },
};
</script>
