<template>
  <div class="h-fit w-[80vw] mt-32 ml-[22rem] flex flex-row border-2">
    <div class="flex flex-col h-fit items-center justify-center m-10">
      <div class="w-60">
        <img
          class="object-cover h-full w-full"
          :src="urlImg + product.image"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-1 flex-col h-fit p-12">
      <div
        class="h-full w-full flex flex-col gap-5 justify-start text-xl font-semibold"
      >
        <p class="font-bold text-3xl">{{ product.name }}.</p>
        <p>
          {{ product.description }}
        </p>
        <div class="flex flex-row w-96 gap-5">
          <div class="flex-row flex gap-2 flex-1">
            <p>{{ product.quantity }}</p>
            <p>Available</p>
          </div>
          <div class="flex-row flex gap-2 flex-1">
            <p>{{ fCurrency(product.price) }}</p>
          </div>
        </div>
        <p>
          Trạng thái:
          <span v-if="product.status === 0" class="text-red-500"
            >Out of stock</span
          >
          <span v-else class="text-green-500">In stock</span>
        </p>
        <p>{{ product.gender ? "Men" : "Women" }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import item from "@/components/images/item/item.png";
import api from "../../services/api";
import { urlImg } from "../../constant/env";
import { fCurrency } from "../../helpers/formatNumber";

export default {
  data() {
    return {
      itemPath: item,
      product: {},
      urlImg,
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      api.get("product/" + this.$route.params.id).then((res) => {
        this.product = res.data.data;
      });
    },
    fCurrency(number) {
      return fCurrency(number);
    },
  },
};
</script>

<style></style>
