<template>
  <div class="col-xl-6">
    <div class="card-xl-stretch mb-5 mb-xl-8 card">
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bolder fs-3 mb-1"
            >Bu Ay Bitmesi Gereken Projeler</span
          >
        </h3>
      </div>
      <div class="card-body py-3">
        <div class="tab-content">
          <div class="active show tab-pane fade" id="kt_table_widget_8_tab_1">
            <div class="table-responsive">
              <table class="table align-middle gs-0 gy-3">
                <thead>
                  <tr>
                    <th class="p-0 w-50px"></th>
                    <th class="p-0 min-w-120px"></th>
                  </tr>
                </thead>
                <tbody>
                  <project-date-item
                    v-for="(projectMonth, index) in projectsMonth.data"
                    :key="index"
                    :projectDate="projectMonth"
                    :detailUrl="{
                      path: src + projectMonth.slug,
                      params: { project: projectMonth.slug },
                    }"
                    :editUrl="{
                      path: src + projectMonth.slug + '/edit',
                      params: { project: projectMonth.slug },
                    }"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <pagination
          :loadPage="selectData"
          :paginationData="projectsMonth"
          :dataParameter="param"
          :showPaginationInfo="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../Pagination.vue";
import ProjectDateItem from "./ProjectDateItem.vue";
export default {
  name: "ProjectsDueThisMonth",
  props: ["projectsMonth", "src", "selectData", "param"],
  components: { ProjectDateItem, Pagination },
};
</script>
