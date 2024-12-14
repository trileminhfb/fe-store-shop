<template>
  <div class="w-full h-fit flex flex-row justify-center items-center mt-32">
    <div
      class="w-[80vw] h-full flex justify-center items-start flex-row gap-2 mt-10"
    >
      <!-- Account Information -->
      <div
        class="flex-[2] rounded-xl h-full flex flex-col items-center text-black p-4 text-xl border-black border"
      >
        <div
          v-for="cart in carts"
          class="flex flex-row gap-5 h-40 w-full bg-white justify-start items-center p-5"
        >
          <img
            class="object-cover w-28 h-32"
            :src="urlImg + cart.product.image"
            alt="Product Image"
          />
          <div
            class="flex flex-col h-full w-full justify-center items-start gap-5 text-lg"
          >
            <p class="font-semibold text-2xl">{{ cart.product.name }}</p>
            <div class="flex flex-row justify-center items-center w-full">
              <div class="flex-1 flex flex-row">
                <p>x</p>
                <p>{{ cart.quantity }}</p>
              </div>
              <div class="flex-1 flex flex-row justify-end text-red-500">
                <p>{{ fCurrency(cart.product.price * cart.quantity) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Information -->
      <div
        class="flex-1 rounded-xl h-fit flex flex-col text-black p-4 text-2xl border-black border"
      >
        <!-- Payment Method and Details -->
        <div class="flex flex-col gap-5 w-full p-5">
          <p class="font-semibold">Payment Method</p>
          <select class="p-2 border rounded-lg" v-model="selectedPaymentMethod">
            <option value="" disabled selected>
              -- Select Payment Method --
            </option>
            <option value="1">Credit Card</option>
            <option value="2">PayPal</option>
            <option value="3">Bank Transfer</option>
          </select>
        </div>

        <div class="flex flex-col gap-5 w-full p-5">
          <p class="font-semibold">Payment details</p>
          <div class="flex flex-col gap-2 w-full text-xl">
            <div class="flex flex-row w-full">
              <p class="flex-1">Merchandise Subtotal</p>
              <div class="flex flex-row text-red-500">
                <p>{{ fCurrency(total) }}</p>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <p class="flex-1">Shipping Subtotal</p>
              <div class="flex flex-row text-red-500">
                <p>{{ fCurrency(shippingFee) }}</p>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <p class="flex-1 font-semibold">Total Payment</p>
              <div class="flex flex-row text-red-500">
                <p>
                  {{ fCurrency(total + shippingFee) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Button -->
        <div class="w-full flex justify-end">
          <button
            :class="
              'w-40 h-12 rounded-xl bg-orange-500 ' +
              (isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer')
            "
            :disabled="isLoading"
            type="button"
            @click="placeOrder()"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import { fCurrency } from "../../helpers/formatNumber";
import { urlImg } from "../../constant/env";

export default {
  data() {
    return {
      product: {}, // Example product data
      shippingFee: 30000, // Example shipping fee
      isLoading: false,
      carts: [],
      total: 0,
      urlImg,
    };
  },
  mounted() {
    if (this.$route.query.idProduct) {
      this.fetchProduct();
    } else {
      this.fetchCarts();
    }
  },
  watch: {
    carts(carts) {
      console.log("carts: ", carts);
      carts.forEach((element) => {
        this.total += element.product.price * element.quantity;
      });
    },
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
    fetchProduct() {
      try {
        api.get("/product/" + this.$route.query.idProduct).then((res) => {
          this.product = res.data.data;
          this.carts.push({
            product: this.product,
            id_product: this.$route.query.idProduct,
            quantity: this.$route.query.quantity,
          });
          this.carts = [...this.carts];
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    placeOrder() {
      this.isLoading = true;
      var payload = {
        carts: [...this.carts],
        isInCart: !!!this.$route.query.idProduct,
      };

      api
        .post("/invoice", payload)
        .then((res) => {
          window.location.href = res.data.link;
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.isLoading = false;
        });
    },
    fCurrency(number) {
      return fCurrency(number);
    },
  },
};
</script>
