<template>
  <div>
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            v-model="color"
            value="#73B6EA"
            checked=""
          />
          <span class="colors__value" style="background-color: #73b6ea"> </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            v-model="color"
            value="#8BE000"
          />
          <span class="colors__value" style="background-color: #8be000"> </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            v-model="color"
            value="#222"
          />
          <span class="colors__value" style="background-color: #222"> </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['product'],

  data() {
    return {
      color: '#73B6EA',
    };
  },
};
</script>
