<template>
  <div class="h-fit w-[80vw] mt-20 ml-[22rem]">
    <!-- Button dẫn đến addProduct -->
    <div class="w-full h-24 flex justify-end pr-5 items-center">
      <router-link
        :to="{ name: 'addProduct' }"
        class="py-2 px-10 bg-blue-500 rounded-3xl text-white font-semibold hover:bg-blue-600"
        type="button"
      >
        + Add
      </router-link>
    </div>
    <!-- Table hiển thị sản phẩm -->
    <div class="h-fit w-full border border-black flex flex-col">
      <div
        class="flex flex-row items-center justify-center w-full h-20 uppercase font-semibold border-2 border-black bg-gray-400"
      >
        <p class="flex-1 flex items-center justify-center border h-full">
          number
        </p>
        <p class="flex-1 flex items-center justify-center border h-full">
          picture
        </p>
        <p class="flex-[4] flex items-center justify-center border h-full">
          name product
        </p>
        <p class="flex-1 flex items-center justify-center border h-full">
          quantity
        </p>
        <p class="flex-1 flex items-center justify-center border h-full">
          status
        </p>
        <p class="flex-1 flex items-center justify-center border h-full">
          action
        </p>
      </div>
      <div
        v-for="(value, index) in products"
        class="flex flex-col items-start w-full h-full font-medium gap-2"
      >
        <div class="flex flex-row w-full h-32 border">
          <p class="flex-1 flex items-center justify-center">{{ index + 1 }}</p>
          <router-link
            :to="{ name: 'detailProduct', params: { id: value.id } }"
            class="flex-1 flex items-center justify-center h-full py-1"
          >
            <div class="h-full w-28 overflow-hidden">
              <img
                class="h-full object-cover"
                :src="urlImg + value.image"
                alt="Product Image"
              />
            </div>
          </router-link>
          <router-link
            :to="{ name: 'detailProduct', params: { id: value.id } }"
            class="flex-[4] flex items-center justify-center h-full"
            >{{ value.name }}
          </router-link>
          <p class="flex-1 flex items-center justify-center h-full">
            {{ value.quantity }}
          </p>
          <p class="flex-1 flex items-center justify-center h-full">
            <button
              @click="changeStatus($event, value, index)"
              v-if="value.status"
              class="bg-green-500 px-3 py-2 rounded-md text-white"
            >
              Available
            </button>
            <button
              @click="changeStatus($event, value, index)"
              v-else
              class="bg-red-500 px-3 py-2 rounded-md text-white"
            >
              Unavailable
            </button>
          </p>
          <div class="flex-1 flex gap-3 items-center justify-center">
            <svg
              @click="
                deleteModal = true;
                deleteId = value.id;
              "
              xmlns="http://www.w3.org/2000/svg"
              class="text-red-500 cursor-pointer"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8Z"
              />
              <path
                fill="currentColor"
                d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32ZM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416ZM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"
              />
            </svg>
            <svg
              @click="handleEdit(value)"
              xmlns="http://www.w3.org/2000/svg"
              class="text-blue-500 cursor-pointer"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <g
                id="feEdit0"
                fill="none"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
              >
                <g id="feEdit1" fill="currentColor">
                  <path
                    id="feEdit2"
                    d="M5 20h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm-1-5L14 5l3 3L7 18H4v-3ZM15 4l2-2l3 3l-2.001 2.001L15 4Z"
                  />
                </g>
              </g>
            </svg>
          </div>

          <!-- modal delete -->
          <el-dialog
            v-model="deleteModal"
            title="Delete"
            width="500"
            :before-close="handleClose"
          >
            <span>Sure?</span>
            <template #footer>
              <div class="dialog-footer">
                <el-button @click="closeModal">Cancel</el-button>
                <el-button type="danger" @click="handleDelete">
                  delete
                </el-button>
              </div>
            </template>
          </el-dialog>

          <!-- modal update -->
          <el-dialog
            v-model="editModal"
            title="Update"
            width="1000"
            :before-close="handleClose"
          >
            <FormEditProduct :product="edit" @update:image="updateImage" />
            <template #footer>
              <div class="dialog-footer">
                <el-button @click="closeModal">Cancel</el-button>
                <el-button type="primary" @click="handleUpdate">
                  Confirm
                </el-button>
              </div>
            </template>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import item from "@/components/images/item/item.png";
import api from "../../services/api";
import { urlImg } from "../../constant/env";
import toast from "../../services/toast";
import FormEditProduct from "../../components/images/admin/formEditProduct.vue";
export default {
  components: {
    FormEditProduct,
  },
  data() {
    return {
      itemPath: item,
      products: [],
      urlImg,
      deleteModal: false,
      editModal: false,
      edit: {},
      deleteId: null,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      api.get("product").then((res) => {
        this.products = res.data.data;
        console.log("this.products: ", this.products);
      });
    },
    closeModal() {
      this.deleteModal = false;
      this.editModal = false;
    },
    changeStatus(event, item, index) {
      event.stopPropagation();
      api.put("product/" + item.id, { status: +!item.status }).then((res) => {
        toast.toastrSuccess("Product status change successful");
        this.products[index].status = res.data.data.status;
      });
    },
    handleDelete() {
      api.delete("product/" + this.deleteId).then((res) => {
        toast.toastrSuccess("Product delete successful");
        this.deleteModal = false;
        this.fetchProducts();
      });
    },
    handleEdit(item) {
      this.editModal = true;
      this.edit = Object.assign({}, item);
      console.log("this.edit: ", ths.edit);
    },
    updateImage(file) {
      console.log("file: ", file);

      this.edit.image = file;
    },
    handleUpdate() {
      console.log("this.edit: ", this.edit);

      const formData = new FormData();
      Object.entries(this.edit).forEach(([key, value]) => {
        formData.append(key, value);
      });

      for (let pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      api
        .post("product/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.toastrSuccess("Product update successful");
          this.editModal = false;
          this.fetchProducts();
        })
        .catch((error) => {
          console.error("Error updating product: ", error);
        });
    },
  },
};
</script>

<style>
.el-overlay {
  background-color: rgba(49, 49, 49, 0.1);
  opacity: 0.2;
}
</style>
