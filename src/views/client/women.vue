<template>
  <div class="w-full flex justify-center mt-[200px]">
    <div class="w-[80vw] h-full flex justify-center items-center flex-col">
      <p class="font-extrabold text-3xl uppercase italic">Women's Clothes</p>
      <div class="h-fit w-full grid grid-cols-4 gap-20 place-items-center">
        <!-- Loop through products and display them -->
        <div
          v-for="product in products"
          :key="product.id"
          class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center"
          @click="goToProductDetails(product.id)"
        >
          <div class="overflow-hidden w-40 h-60 bg-white">
            <img
              class="object-cover h-full"
              :src="urlImg + product.image"
              alt="Product image"
            />
          </div>
          <p class="uppercase font-bold">{{ product.name }}</p>
          <p class="">{{ product.price | currency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import { urlImg } from "../../constant/env";

export default {
  data() {
    return {
      products: [], // Array to hold the products
      urlImg,
    };
  },
  created() {
    this.fetchProducts(); // Fetch products when the component is created
  },
  methods: {
    fetchProducts() {
      try {
        api.get("product/gender/0").then((res) => {
          this.products = res.data.data;
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    // Navigate to the product details page
    goToProductDetails(productId) {
      this.$router.push({ name: "clothes", params: { productId } });
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
