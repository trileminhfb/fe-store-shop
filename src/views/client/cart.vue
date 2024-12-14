<template>
  <div class="w-full h-fit flex flex-col justify-center items-center mt-32">
    <div
      class="w-[60vw] h-full flex justify-start items-center flex-col gap-5 p-5"
    >
      <div class="flex flex-row w-full gap-2">
        <p class="font-extrabold text-3xl text-left">Cart (</p>
        <p class="font-extrabold text-3xl text-left">2</p>
        <p class="font-extrabold text-3xl text-left">Product)</p>
      </div>

      <div
        class="w-full bg-white h-full rounded-3xl border border-black p-5 flex flex-col"
      >
        <div
          class="w-full h-10 bg-gray-300 flex flex-row items-center pl-5 font-bold"
        >
          <div class="flex-[6]">Product</div>
          <div class="flex-[3]">Quantity</div>
          <div class="flex-[3]">Price</div>
          <div class="flex-1"></div>
        </div>

        <div class="w-full flex flex-col gap-5">
          <div
            v-for="(item, index) in carts"
            :key="index"
            class="w-full h-40 flex flex-row items-center pl-5 border border-black"
          >
            <div
              class="flex-[6] flex flex-row gap-5 justify-start items-center"
            >
              <img
                class="h-32"
                :src="'/images/products/' + item.product.image"
                alt=""
              />
              <p class="font-semibold">{{ item.product.name }}</p>
            </div>
            <div class="flex-[3]">
              <input
                class="border-black border text-end h-10 w-32 pr-2"
                type="number"
                :value="item.quantity"
                min="1"
                :max="item.product.quantity"
                @change="handleInputChange($event.target.value, item.id, index)"
              />
            </div>
            <div class="flex-[3] flex flex-row font-semibold text-red-500">
              <p>{{ fCurrency(item.product.price * item.quantity) }}</p>
            </div>
            <div class="flex-1">
              <button type="button">
                <svg
                  class="w-10 h-10 text-red-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="w-full h-fit flex justify-end">
            <router-link :to="{ name: 'buy' }">
              <button
                :class="
                  'w-40 h-12 rounded-xl bg-orange-500 font-bold text-white ' +
                  (isLoading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer')
                "
                :disabled="isLoading"
                type="button"
              >
                Buy
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import item from "@/components/images/item/item.png";
import api from "../../services/api";
import { fCurrency } from "../../helpers/formatNumber";
import _ from "lodash";
export default {
  data() {
    return {
      itemPath: item,
      carts: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchCarts(); // Fetch products when the component is created
  },
  methods: {
    fetchCarts() {
      try {
        api.get("cart").then((res) => {
          this.carts = res.data.data;
          console.log("this.carts: ", this.carts);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    fCurrency(number) {
      return fCurrency(number);
    },
    handleInputChange(quantity, productId, index) {
      this.carts[index].quantity = quantity;
      this.debouncedUpdateQuantity(quantity, productId);
    },
    debouncedUpdateQuantity: _.debounce(function (quantity, productId) {
      api
        .put("cart/" + productId, { quantity: quantity })
        .then((res) => {
          console.log("res: ", res);
        })
        .catch((err) => console.log(err));
    }, 500),
  },
};
</script>
<style></style>
