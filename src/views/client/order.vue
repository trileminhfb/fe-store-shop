<template>
  <div class="h-screen w-full flex justify-center pt-40">
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">My Orders</h1>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Number
              </th>
              <th class="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Invoice ID
              </th>
              <th class="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Order date
              </th>
              <th class="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Status
              </th>
              <th class="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Quantity
              </th>
              <th
                class="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-nowrap"
              >
                Total Price
              </th>
              <th class="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-center">
            <tr
              v-for="(value, index) in orders"
              :key="index"
              class="odd:bg-slate-100"
            >
              <td class="w-1/4 py-3 px-4">{{ index + 1 }}</td>
              <td class="w-1/4 py-3 px-4">{{ value.id }}</td>
              <td class="w-1/4 py-3 px-4">{{ value.date }}</td>
              <td class="w-1/4 py-3 px-4 ps-20">
                <div
                  class="bg-green-500 text-white w-32 py-2 rounded text-nowrap"
                  v-if="value.status"
                >
                  Delivered
                </div>
                <div
                  class="bg-red-500 text-white w-32 py-2 rounded text-nowrap"
                  v-else
                >
                  Not delivered
                </div>
              </td>
              <td class="w-1/4 py-3 px-4">{{ value.quantity }}</td>
              <td class="w-1/4 py-3 px-4">{{ fCurrency(value.total) }}</td>
              <td class="w-1/4 py-3 px-4">
                <button
                  @click="handleDetail(value)"
                  class="bg-blue-500 text-white py-2 px-4 rounded text-nowrap"
                >
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <el-dialog
          v-model="dialogTableVisible"
          title="Shipping address"
          width="1200"
        >
          <el-table :data="details">
            <el-table-column prop="id" label="ID" width="150" />
            <el-table-column prop="name" label="Name" width="200" />
            <el-table-column label="Image" width="200">
              <template #default="scope">
                <img
                  :src="getImageUrl(scope.row.image)"
                  alt="Product Image"
                  class="w-16 h-16 object-cover"
                />
              </template>
            </el-table-column>
            <el-table-column prop="description" label="Description" />
            <el-table-column prop="price" label="Price" />
            <el-table-column prop="quantity" label="Quantity" />
            <el-table-column label="Total" width="200">
              <template #default="scope">
                {{ fCurrency(scope.row.price * scope.row.quantity) }}
              </template>
            </el-table-column>
          </el-table>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { fCurrency } from "../../helpers/formatNumber";
import api from "../../services/api";
import { urlImg } from "../../constant/env";

export default {
  data() {
    return {
      orders: [],
      details: [],
      dialogTableVisible: false,
      urlImg,
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      api.get("/invoice").then((res) => {
        this.orders = res.data.data.map((order) => {
          return {
            ...order,
            total: order.items
              .map((item) => item.price * item.quantity)
              .reduce((a, b) => a + b, 0),
          };
        });
        console.log("this.orders: ", this.orders);
      });
    },
    fCurrency(number) {
      return fCurrency(number);
    },
    handleDetail(value) {
      this.dialogTableVisible = true;
      this.details = value.items;
      console.log("this.details: ", this.details);
    },
    getImageUrl(imagePath) {
      // Kiểm tra xem imagePath có hợp lệ không
      if (!imagePath) {
        return ""; // Trả về một đường dẫn hình ảnh mặc định nếu imagePath bị undefined hoặc null
      }
      return urlImg + imagePath;
    },
  },
};
</script>

<style></style>
