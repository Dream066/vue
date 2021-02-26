<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        aria-label="Предыдущая страница"
        href="#"
        @click.prevent="backPage(page)"
        :class="this.page === 1 ? 'pagination__link--disabled' : ''"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a
        style="cursor: pointer"
        href="#"
        class="pagination__link"
        :class="{ 'pagination__link--current': pageNumber === page }"
        @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Следующая страница"
        @click.prevent="nextPage(page)"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },

  props: ['page', 'count', 'perPage'],

  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },

  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    nextPage(page) {
      this.$emit('paginate', page + 1);
    },
    backPage(page) {
      this.$emit('paginate', page - 1);
    },
  },
};
</script>
