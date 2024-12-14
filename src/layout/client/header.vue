<template>
  <div class="bg-black w-full flex flex-col fixed top-0">
    <div class="h-20 w-full flex flex-row pl-5 pr-5">
      <div class="flex-1 h-full flex items-center justify-start">
        <a href="/" class="overflow-hidden">
          <img class="object-cover h-16 rounded-full" :src="logoPath" alt="" />
        </a>
      </div>

      <div class="flex-1 h-full flex items-center justify-center">
        <a class="uppercase font-extrabold italic text-6xl text-white" href="/"
          >chcope shop</a
        >
      </div>
      <div class="flex-1 h-full flex items-center justify-end flex-row gap-5">
        <a
          href="/cart"
          class="rounded-full flex justify-center items-center bg-red-400 w-16 h-16"
        >
          <svg
            class="w-12 h-12 text-black"
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
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
        </a>
        <div
          v-if="isLogin"
          class="rounded-full flex justify-center items-center bg-white w-16 h-16 relative group"
        >
          <svg
            class="w-12 h-12 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <div
            class="absolute top-10 z-20 right-0 bg-white w-60 h-fit flex-col rounded-2xl overflow-hidden border border-black hidden group-hover:flex"
          >
            <router-link
              :to="{ name: 'profile' }"
              class="p-5 w-full uppercase font-bold text-xl hover:bg-gray-300 flex flex-row items-center gap-5"
            >
              <svg
                class="w-6 h-6 text-black"
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
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
              <p>Profile</p>
            </router-link>
            <router-link
              :to="{ name: 'order' }"
              class="p-5 w-full uppercase font-bold text-xl hover:bg-gray-300 flex flex-row items-center gap-5"
            >
              <svg
                class="w-6 h-6 text-black"
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
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
              <p>Orders</p>
            </router-link>
            <div
              class="p-5 w-full uppercase font-bold text-xl hover:bg-gray-300 flex flex-row items-center gap-5"
              @click="handleLogout"
            >
              <svg
                class="w-6 h-6 text-black"
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
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>

              <p>Log Out</p>
            </div>
          </div>
        </div>
        <div v-else>
          <router-link
            to="/login"
            class="bg-white px-4 py-3 rounded-lg cursor-pointer font-semibold text-xl hover:bg-red-200"
          >
            Đăng nhập
          </router-link>
          <router-link
            to="/register"
            class="bg-white px-4 py-3 rounded-lg cursor-pointer font-semibold text-xl hover:bg-red-200 ms-2"
          >
            Đăng ký
          </router-link>
        </div>
      </div>
    </div>
    <div class="h-12 w-full bg-red-300 flex flex-row">
      <div
        class="h-full flex-1 flex flex-row items-center justify-start uppercase font-bold text-xl"
      >
        <a class="h-full flex items-center p-5" href="/">home</a>
        <div
          class="hover:bg-gray-300 h-full flex items-center p-5 relative group"
        >
          <p class="hover:cursor-context-menu">category</p>
          <div
            class="w-60 h-fit bg-white absolute top-12 left-0 flex-col hidden group-hover:flex"
          >
            <a class="p-2 hover:bg-gray-300" href="">Lorem, ipsum. asdsd </a>
            <a class="p-2 hover:bg-gray-300" href="">Lorem, ipsum. asdsd </a>
          </div>
        </div>
        <div
          class="hover:bg-gray-300 h-full flex items-center p-5 relative group"
        >
          <p class="hover:cursor-context-menu">brand</p>
          <div
            class="w-60 h-fit bg-white absolute top-12 left-0 flex-col hidden group-hover:flex"
          >
            <a class="p-2 hover:bg-gray-300" href="">Lorem, ipsum. asdsd </a>
            <a class="p-2 hover:bg-gray-300" href="">Lorem, ipsum. asdsd </a>
          </div>
        </div>
        <a class="hover:bg-gray-300 h-full flex items-center p-5" href="/men"
          >men</a
        >
        <a class="hover:bg-gray-300 h-full flex items-center p-5" href="/women"
          >women</a
        >
      </div>
      <div
        class="h-full flex-1 flex flex-row items-center justify-end uppercase font-bold text-xl pr-5 gap-5"
      >
        <a href="">
          <svg
            class="w-10 h-10 text-black"
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
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </a>

        <div class="relative">
          <input
            @input="onInput"
            v-model="keyword"
            class="rounded-xl h-10 pl-5"
            type="text"
            placeholder="Search"
          />

          <!-- bảng search -->
          <div
            :class="
              'absolute flex flex-col gap-2 left-0 overflow-auto z-10 w-full mt-2 rounded-md bg-white shadow-2xl transition-all duration-200 ease-out ' +
              (isShow ? 'max-h-[500px] p-2' : 'max-h-0 p-0')
            "
          >
            <div
              v-if="resultsSearch.length != 0 && isShow"
              v-for="item in resultsSearch"
              class="flex flex-row gap-2"
              :key="item.id"
            >
              <div
                @click="goToDetailPage(item.id)"
                class="w-16 min-h-24 overflow-hidden rounded-sm cursor-pointer"
              >
                <img
                  :src="'/images/products/' + item.image"
                  alt=""
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <div class="text-sm flex-1 relative">
                <p
                  @click="goToDetailPage(item.id)"
                  class="line-clamp-2 font-bold cursor-pointer"
                >
                  {{ item.name }}
                </p>
                <p class="font-medium text-red-400">
                  {{ fCurrency(item.price) }}
                </p>

                <div class="absolute bottom-0 flex justify-between gap-2">
                  <button
                    @click="goToBuyPage(item)"
                    class="p-2 bg-yellow-300 rounded-sm hover:bg-yellow-400"
                  >
                    Buy now
                  </button>
                  <button
                    @click="addToCart(item)"
                    class="p-2 bg-yellow-300 rounded-sm hover:bg-yellow-400"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div
              v-else-if="resultsSearch.length == 0 && isShow"
              class="text-center"
            >
              not found
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fCurrency } from "../../helpers/formatNumber";
import logo from "@/components/images/logo/logo.png";
import api from "../../services/api";
import _ from "lodash";
import toast from "../../services/toast";
export default {
  data() {
    return {
      logoPath: logo,
      isLogin: false,
      keyword: "",
      resultsSearch: [],
      isShow: false,
    };
  },
  created() {
    this.isLogin = !!localStorage.getItem("token");
    this.$emitter.on("login", () => {
      this.isLogin = true;
    });
  },
  methods: {
    handleLogout() {
      api.get("/logout");
      this.isLogin = false;
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    onInput: _.debounce(function () {
      if (this.keyword === "") {
        this.resultsSearch = [];
        this.isShow = false;
        return;
      }
      api.post("/product/search", { keyword: this.keyword }).then((res) => {
        this.resultsSearch = res.data.data;
        this.isShow = true;
      });
    }, 500),
    fCurrency(number) {
      return fCurrency(number);
    },
    resetResultSearch() {
      this.isShow = false;
      this.resultsSearch = [];
    },
    goToDetailPage(id) {
      this.resetResultSearch();
      this.$router.push({
        name: "clothes",
        params: {
          productId: id,
        },
      });
    },
    goToBuyPage(item) {
      this.resetResultSearch();
      // Pass the product and quantity data to the buy route
      this.$router.push({
        name: "buy",
        query: {
          idProduct: item.id, // Pass the product data
          quantity: 1, // Pass the quantity data
        },
      });
    },
    addToCart(item) {
      this.resetResultSearch();
      // Logic to add product to cart
      const payload = {
        id_user: 1,
        id_product: item.id,
        quantity: 1,
      };
      api.post("/cart", payload).then((res) => {
        toast.toastrSuccess("Add to cart success");
      });
    },
  },
};
</script>
