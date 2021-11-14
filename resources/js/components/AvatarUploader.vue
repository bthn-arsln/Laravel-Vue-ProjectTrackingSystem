<template>
  <div
    class="image-input image-input-circle"
    :class="[imageChanged, imageEmpty]"
    data-kt-image-input="true"
    :style="'background-image: url(' + blankImage + ')'"
  >
    <!--begin::Image preview wrapper-->
    <div
      class="image-input-wrapper w-125px h-125px"
      :style="
        'background-image: url(' +
        (selectedImage == null ? image : selectedImage) +
        ')'
      "
    ></div>
    <!--end::Image preview wrapper-->

    <!--begin::Edit button-->
    <label
      class="
        btn btn-icon btn-circle btn-active-color-primary
        w-25px
        h-25px
        bg-white
        shadow
      "
      data-kt-image-input-action="change"
      data-bs-toggle="tooltip"
      data-bs-dismiss="click"
      title="Resmi Değiştir"
    >
      <i class="bi bi-pencil-fill fs-7"></i>

      <!--begin::Inputs-->
      <input type="file" name="avatar" ref="avatar" @change="upload($event)" />
      <input type="hidden" name="avatar_remove" />
      <!--end::Inputs-->
    </label>
    <!--end::Edit button-->

    <!--begin::Cancel button-->
    <span
      class="
        btn btn-icon btn-circle btn-active-color-primary
        w-25px
        h-25px
        bg-white
        shadow
      "
      data-kt-image-input-action="cancel"
      data-bs-toggle="tooltip"
      data-bs-dismiss="click"
      title="Resmi Kaldır"
      @click="removeImage()"
    >
      <i class="bi bi-x fs-2"></i>
    </span>
    <!--end::Cancel button-->

    <!--begin::Remove button-->
    <span
      class="
        btn btn-icon btn-circle btn-active-color-primary
        w-25px
        h-25px
        bg-white
        shadow
      "
      data-kt-image-input-action="remove"
      data-bs-toggle="tooltip"
      data-bs-dismiss="click"
      title="Resmi Sil"
    >
      <i class="bi bi-x fs-2"></i>
    </span>
    <!--end::Remove button-->
  </div>
</template>

<script>
export default {
  name: "AvatarUploader",
  props: ["image"],
  data() {
    return {
      selectedImage: null,
      blankImage: "/assets/media/avatars/blank.png",
    };
  },
  methods: {
    upload(event) {
      this.loadImage(event);
      this.dispatchImage(event);
    },
    loadImage(event) {
      const file = event.target.files[0];
      this.selectedImage = URL.createObjectURL(file);
    },
    dispatchImage(event) {
      this.$emit("loaded", event.target.files[0]);
    },
    removeImage() {
      this.selectedImage = this.blankImage;
    },
  },
  computed: {
    imageEmpty() {
      return {
        "image-input-empty": this.selectedImage == this.blankImage,
      };
    },
    imageChanged() {
      return {
        "image-input-changed": this.selectedImage != this.blankImage,
      };
    },
  },
};
</script>
