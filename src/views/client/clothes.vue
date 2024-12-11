<template>
    <div class="w-full h-[calc(100vh-8rem)] flex justify-center mt-32">
        <div class="w-[80vw] h-full flex justify-center items-center flex-row">
            <div class="flex-1 h-full flex justify-center items-center">
                <div class="h-[500px] w-[500px] bg-black overflow-hidden">
                    <!-- Display product image -->
                    <img :src="`/images/products/${product.image}`" alt="Product image">
                </div>
            </div>
            <div class="flex-1 h-full flex flex-col text-black pt-20 pl-20 gap-5 text-2xl">
                <p class="font-semibold text-3xl">{{ product.name }}</p>
                <div class="flex flex-row text-red-500">
                    <p class="font-semibold text-3xl">{{ product.price | currency }}</p>
                    <p class="text-xl">VNĐ</p>
                </div>
                <p class="font-normal text-xl">{{ product.description }}</p>
                <div class="flex flex-row gap-5">
                    <p>Category:</p>
                    <!-- Display category directly as string -->
                    <p>{{ product.category }}</p>
                </div>
                <div class="flex flex-row gap-5">
                    <p>Gender:</p>
                    <p>{{ product.gender === 0 ? 'Women' : 'Men' }}</p>
                </div>
                <div class="flex flex-row gap-5">
                    <p>Quantity</p>
                    <input class="border-black border text-end w-52 rounded-full pr-2" type="number" v-model="quantity"
                        min="0" max="product.quantity" />
                    <p class="text-sm">{{ product.quantity }} available</p>
                </div>
                <div class="flex flex-row gap-5 items-center justify-center">
                    <button class="flex-1 h-12 bg-orange-500 font-bold rounded-full" type="button" @click="goToBuyPage">
                        Buy
                    </button>
                    <button class="flex-1 h-12 bg-orange-500 font-bold rounded-full" type="button" @click="addToCart">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import api from '../../services/api';
import toast from '../../services/toast';

export default {
    data() {
        return {
            product: {}, // To hold the selected product data
            quantity: 1, // Default quantity
        };
    },
    created() {
        const productId = this.$route.params.productId; // Get productId from route params
        this.fetchProductDetails(productId);
    },
    methods: {
        async fetchProductDetails(productId) {
            try {
                const response = await api.get(`product/${productId}`);
                if (response.data && response.data.data) {
                    this.product = response.data.data; // Assign the product data
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        },
        goToBuyPage() {
            // Pass the product and quantity data to the buy route
            this.$router.push({
                name: 'buy',
                query: {
                    idProduct: this.product.id,  // Pass the product data
                    quantity: this.quantity  // Pass the quantity data
                }
            });
        },
        addToCart() {
            // Logic to add product to cart
            const payload = {
                "id_user": 1,
                "id_product": this.$route.params.productId,
                "quantity": this.quantity
            }
            api.post('/cart', payload)
                .then((res) => {
                    toast.toastrSuccess("Add to cart success");
                })
        },
    }

};
</script>
