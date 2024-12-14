<template>
  <div
    class="h-fit w-[80vw] mt-32 ml-[22rem] border-2 flex flex-col justify-center"
  >
    <FormEditProduct :product="product" @update:image="updateImage" />

    <button
      @click="addProduct"
      class="px-20 py-2 w-fit rounded-xl mx-auto bg-orange-500 font-bold text-white"
      type="button"
    >
      Add
    </button>
  </div>
</template>

<script>
import item from "@/components/images/item/item.png";
import api from "../../services/api";
import FormEditProduct from "../../components/images/admin/formEditProduct.vue";

export default {
  data() {
    return {
      itemPath: item,
      product: {
        gender: 1,
      },
    };
  },
  components: {
    FormEditProduct,
  },
  methods: {
    addProduct() {
      const formData = new FormData();
      Object.entries(this.product).forEach(([key, value]) => {
        formData.append(key, value);
      });

      api
        .post("product", this.product, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res: ", res.data.data);
        });
    },
    updateImage(file) {
      this.product.image = file;
    },
  },
};
</script>

<style></style>
