<template>
  <div class="flex flex-col h-fit items-center justify-center">
    <div @click="clickImage" class="h-60 w-60 border-2 border-black relative">
      <img
        class="object-cover h-full w-full object-center"
        :src="image ? image : itemPath"
        alt="Product Image"
      />
      <input
        ref="image"
        @change="uploadImage"
        accept="image/*"
        class="hidden"
        type="file"
        name="image"
        id="image"
      />
    </div>
  </div>
  <div class="flex flex-1 flex-col h-fit p-12">
    <div
      class="h-full w-full flex flex-col gap-5 justify-start text-xl font-semibold"
    >
      <input
        v-model="product.name"
        class="font-bold text-3xl border"
        placeholder="Name Product"
        type="text"
      />
      <input
        v-model="product.description"
        class="h-20 border"
        placeholder="Description"
        type="text"
      />
      <div class="flex flex-row w-96 gap-5">
        <div class="flex-row flex gap-2 flex-1">
          <input
            v-model="product.quantity"
            class="w-32 border text-end"
            placeholder="Quantity"
            type="number"
          />
          <p>Available</p>
        </div>
        <div class="flex-row flex gap-2 flex-1">
          <input
            v-model="product.price"
            class="w-32 border text-end"
            placeholder="Price"
            type="number"
          />
          <p>VNĐ</p>
        </div>
      </div>
      <div class="flex flex-row gap-5 items-center">
        <select v-model="product.gender" class="border p-2 w-32 h-12 text-base">
          <option value="1">MEN</option>
          <option value="0">WOMEN</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import itemPath from "@/components/images/item/item.png";
import { urlImg } from "../../../constant/env";

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      image: this.product.image ? urlImg + this.product.image : itemPath,
      urlImg,
    };
  },
  watch: {
    "product.image"(newImage) {
      if (newImage) {
        this.image = URL.createObjectURL(newImage);
      } else {
        this.image = itemPath;
      }
    },
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      this.image = URL.createObjectURL(file);
      this.$emit("update:image", file);
    },
    clickImage() {
      this.$refs.image.click();
    },
  },
};
</script>

<style></style>
