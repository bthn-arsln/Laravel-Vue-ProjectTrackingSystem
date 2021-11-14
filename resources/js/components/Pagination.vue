<template>
  <div class="d-flex flex-stack flex-wrap" v-if="paginationData.total != 0">
    <div class="fs-6 fw-bold text-gray-700" v-show="showPaginationInfo">
      {{ paginationData.total }} kayıttan {{ paginationData.current_page }} ile
      {{ paginationData.last_page }} arası gösteriliyor
    </div>
    <nav>
      <ul class="pagination">
        <li
          class="paginate_button page-item previous"
          :class="{ disabled: paginationData.current_page == 1 }"
          id="kt_datatable_example_1_previous"
        >
          <router-link
            :to="{
              path: '',
              query: { page: paginationData.current_page - 1 },
            }"
            @click.native="previousPage()"
            class="page-link"
            ><i class="previous"></i
          ></router-link>
        </li>
        <li
          class="paginate_button page-item"
          :class="{
            active: link.active == true,
            disabled: link.url == null,
          }"
          v-for="(link, index) in paginationData.links"
          :key="index"
        >
          <router-link
            :to="{ path: '', query: { page: link.label } }"
            @click.native="page($route.query.page)"
            class="page-link"
            v-html="link.label"
            v-show="
              link.label != '&laquo; Previous' && link.label != 'Next &raquo;'
            "
          >
          </router-link>
        </li>
        <li
          class="paginate_button page-item next"
          id="kt_datatable_example_1_next"
          :class="{
            disabled: paginationData.current_page == paginationData.last_page,
          }"
        >
          <router-link
            :to="{
              path: '',
              query: { page: paginationData.current_page + 1 },
            }"
            @click.native="nextPage()"
            class="page-link"
          >
            <i class="next"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    loadPage: String,
    dataParameter: String | Number,
    paginationData: Object | Array,
    showPaginationInfo: { default: true },
  },
  methods: {
    page(page) {
      this.$store.dispatch(this.loadPage, {
        param: this.dataParameter ?? null,
        page,
      });
    },
    nextPage() {
      this.$store.dispatch(this.loadPage, {
        param: this.dataParameter ?? null,
        page: this.paginationData.current_page + 1,
      });
    },
    previousPage() {
      this.$store.dispatch(this.loadPage, {
        param: this.dataParameter ?? null,
        page: this.paginationData.current_page - 1,
      });
    },
  },
  watch: {
    $route() {
      this.$store.dispatch(this.loadPage, {
        param: this.dataParameter ?? null,
        page: this.$route.query.page,
      });
    },
  },
};
</script>
