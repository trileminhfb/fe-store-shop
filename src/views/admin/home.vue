<template>
  <div class="bg-gray-100 w-full h-screen ps-[330px] pt-20">
    <div class="full px-20 pt-20 w-1/2 grid grid-cols-2 gap-10 font-semibold">
      <div class="p-10 bg-yellow-200 rounded-xl">
        Tổng số hoá đơn lập trong 30 ngày:
        {{ response.totalInvoice }}
      </div>
      <div class="p-10 bg-pink-200 rounded-xl">
        Tổng số tiền kiếm được trong 30 ngày
        {{ fCurrency(response.totalPrice) }}
      </div>
      <div class="p-10 bg-red-200 rounded-xl">
        Tổng số tiền sản phẩm bán đc:
        {{ response.totalProduct }}
      </div>
    </div>
  </div>
</template>

<script>
import item from "@/components/images/item/item.png";
import api from "../../services/api";
import { fCurrency } from "../../helpers/formatNumber";
export default {
  data() {
    return {
      itemPath: item,
      response: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      api.get("statistic").then((response) => {
        this.response = response.data;
        console.log("this.response: ", this.response);
      });
    },
    fCurrency(value) {
      return fCurrency(value);
    },
  },
};
</script>
