<template>
    <div class="w-full h-screen flex justify-center mt-16">
        <div class="w-[80vw] h-full flex justify-center items-center flex-col">
            <p class="font-extrabold text-3xl uppercase italic">Men's Clothes</p>
            <div class="h-fit w-full grid grid-cols-4 gap-20 place-items-center">
                <!-- Loop through products and display them -->
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
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [], // Array to hold the products
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
                    // Filter the products to only show those with gender 0 (Women)
                    this.products = response.data.data.filter(product => product.gender === 0);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        // Navigate to the product details page
        goToProductDetails(productId) {
            this.$router.push({ name: 'clothes', params: { productId } });
        }
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
