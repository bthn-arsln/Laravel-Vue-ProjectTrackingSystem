<template>
  <div class="col-md-6 col-xl-4">
    <!--begin::Card-->
    <router-link
      :to="{
        path: src + project.slug,
        params: { project: project.slug },
      }"
      class="card border border-2 border-gray-300 border-hover"
    >
      <!--begin::Card header-->
      <div class="card-header border-0 pt-9">
        <!--begin::Card Title-->
        <div class="card-title m-0">
          <!--begin::Avatar-->
          <div class="symbol symbol-50px w-50px bg-light">
            <img :src="project.image" :alt="project.title" class="p-3" />
          </div>
          <!--end::Avatar-->
        </div>
        <!--end::Car Title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <span
            class="badge badge-light-primary fw-bolder me-auto px-4 py-3"
            v-show="project.status == 'start'"
          >
            Yeni Başladı
          </span>

          <span
            class="badge badge-info fw-bolder me-auto px-4 py-3"
            v-show="project.status == 'continue'"
          >
            Devam Ediyor
          </span>

          <span
            class="badge badge-light-success fw-bolder me-auto px-4 py-3"
            v-show="project.status == 'finish'"
          >
            Bitti
          </span>

          <span
            class="badge badge-light-warning fw-bolder me-auto px-4 py-3"
            v-show="project.status == 'reject'"
          >
            İptal Edildi
          </span>
          <span
            class="badge badge-light fw-bolder me-auto px-4 py-3"
            v-show="project.status == null"
          >
            Durum Bilgisi Yok
          </span>
        </div>
        <!--end::Card toolbar-->
      </div>
      <!--end:: Card header-->
      <!--begin:: Card body-->
      <div class="card-body p-9">
        <!--begin::Name-->
        <div class="fs-3 fw-bolder text-dark">{{ project.title }}</div>
        <!--end::Name-->
        <!--begin::Description-->
        <p class="text-gray-400 fw-bold fs-5 mt-1 mb-7">
          {{ project.description }}
        </p>
        <!--end::Description-->
        <!--begin::Info-->
        <div class="d-flex flex-wrap mb-5">
          <!--begin::Due-->
          <div
            class="
              border border-gray-300 border-dashed
              rounded
              min-w-125px
              py-3
              px-4
              me-7
              mb-3
            "
          >
            <div class="fs-6 text-gray-800 fw-bolder">
              {{ project.starting_date | diffForHumans }}
            </div>
            <div class="fw-bold text-gray-400">Başlangıç Tarihi</div>
          </div>
          <!--end::Due-->
          <!--begin::Due-->
          <div
            class="
              border border-gray-300 border-dashed
              rounded
              min-w-125px
              py-3
              px-4
              me-7
              mb-3
            "
          >
            <div class="fs-6 text-gray-800 fw-bolder">
              {{ project.finished_date | diffForHumans }}
            </div>
            <div class="fw-bold text-gray-400">Bitiş Tarihi</div>
          </div>
          <!--end::Due-->
        </div>
        <!--end::Info-->
        <!--begin::Users-->
        <div class="symbol-group symbol-hover">
          <!--begin::User-->
          <div
            class="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            v-for="(member, index) in project.team.slice(0, 7)"
            :key="index"
            :title="member.name"
          >
            <img :alt="member.name" :src="member.image" v-show="member.image" />
            <span
              class="symbol-label bg-primary text-inverse-primary fw-bolder"
              v-show="!member.image"
              >{{ member.name.charAt(0) }}</span
            >
          </div>
          <!--begin::User-->
        </div>
        <!--end::Users-->
      </div>
      <!--end:: Card body-->
    </router-link>
    <!--end::Card-->
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: ["project", "src"],
};
</script>
