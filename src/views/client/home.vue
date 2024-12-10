<template>
    <div class="w-full h-screen mt-32">
        <!-- Hero Section -->
        <div class="overflow-hidden w-full h-[80vh] bg-black">
            <img class="h-full w-full object-cover" src="https://www.foreverinfashion.org/articles/1.051739000.jpg"
                alt="Hero Image">
        </div>

        <!-- Product Display Section -->
        <div class="mt-5 h-fit w-full flex flex-col justify-center items-center gap-5">
            <div class="uppercase font-extrabold text-lg">Welcome to Shop</div>
            <div class="h-fit w-full grid grid-cols-4 gap-20 place-items-center">
                <div v-for="product in products" :key="product.id"
                    class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center"
                    @click="goToProductDetails(product.id)">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="`/images/products/${product.image}`" alt="Product image">
                    </div>
                    <p class="uppercase font-bold">{{ product.name }}</p>
                    <p class="">{{ product.price | currency }}</p>
                </div>
            </div>
        </div>

        <!-- Footer Section -->
        <div class="w-full h-[50vh] mt-5 p-10 bg-gray-300 flex flex-row">
            <div class="w-full h-full flex-1 justify-center items-center flex flex-col">
                <div class="w-80 h-80 rounded-full overflow-hidden">
                    <img class="h-full object-cover" :src="logoPath" alt="Logo">
                </div>
                <p class="uppercase font-extrabold text-3xl italic">chcope shop</p>
            </div>
            <div class="w-full h-full bg-red-100 flex-1 p-10 text-black">
                <div>
                    <p class="uppercase font-bold">Connect with us</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur beatae molestiae illum,
                        suscipit facere repellendus!</p>
                </div>
                <div class="mt-5">
                    <p class="uppercase font-bold">Hotline</p>
                    <p>0123456789</p>
                </div>
                <div class="mt-5">
                    <p class="uppercase font-bold">E-mail</p>
                    <p>abcadasdasd@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import logo from '@/components/images/logo/logo.png';

export default {
    data() {
        return {
            products: [], // Array to hold the products
            logoPath: logo,
        };
    },
    created() {
        this.fetchProducts(); // Fetch products when the component is created
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/product');
                if (response.data.message === 'Lấy data sản phẩm thành công') {
                    // Set the products to be displayed (no filtering by gender)
                    this.products = response.data.data;
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        // Navigate to the product details page
        goToProductDetails(productId) {
            this.$router.push({ name: 'product-details', params: { productId } });
        }
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
