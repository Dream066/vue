<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategotyId"
      />
      <section class="catalog">
        <ProductList :products="products" />

        <BasePagination
          v-model="page"
          :count="countProducts"
          :per-page="ProductsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import ProductItem from './components/ProductItem.vue';
import BasePagination from './components/BasePagination.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'App',
  components: { ProductList, BasePagination, ProductFilter },
  ProductItem,
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategotyId: 0,
      page: 1,
      ProductsPerPage: 3,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price > this.filterPriceFrom,
        );
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }
      if (this.filterCategotyId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategotyId,
        );
      }

      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.ProductsPerPage;

      return this.filteredProducts.slice(offset, offset + this.ProductsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
