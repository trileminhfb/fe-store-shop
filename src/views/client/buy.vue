<template>
    <div class="w-full h-fit flex flex-row justify-center items-center mt-32">
        <div class="w-[80vw] h-full flex justify-center items-start flex-row">
            <!-- Account Information -->
            <div class="flex-[4] h-full flex text-black p-4 text-xl border-black border">
                <div class="flex flex-col gap-5 w-full">
                    <div class="flex flex-col gap-2">
                        <p>Account</p>
                        <input class="h-10 w-full border pl-5" disabled type="text" placeholder="Account"
                            v-model="account">
                    </div>

                    <div class="flex flex-row gap-5">
                        <div class="flex-1 flex flex-col">
                            <p>Full Name</p>
                            <input class="h-10 w-full border pl-5" type="text" placeholder="Full Name"
                                v-model="fullName">
                        </div>
                        <div class="flex-1 flex flex-col">
                            <p>Phone Number</p>
                            <input class="h-10 w-full border pl-5" type="text" placeholder="Phone Number"
                                v-model="phoneNumber">
                        </div>
                    </div>

                    <div class="flex flex-col gap-2">
                        <p>Address</p>
                        <input class="h-10 w-full border pl-5" type="text" placeholder="Address" v-model="address">
                    </div>

                    <div class="flex flex-row gap-5">
                        <div class="flex-1 flex flex-col">
                            <p>City</p>
                            <select class="p-2 border rounded-lg" v-model="selectedCity" @change="fetchDistricts">
                                <option value="" disabled selected>-- Select City --</option>
                                <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.full_name }}
                                </option>
                            </select>
                        </div>
                        <div class="flex-1 flex flex-col">
                            <p>District</p>
                            <select class="p-2 border rounded-lg" v-model="selectedDistrict" @change="fetchWards">
                                <option value="" disabled selected>-- Select District --</option>
                                <option v-for="district in districts" :key="district.id" :value="district.id">{{
                                    district.full_name }}</option>
                            </select>
                        </div>
                        <div class="flex-1 flex flex-col">
                            <p>Ward</p>
                            <select class="p-2 border rounded-lg" v-model="selectedWard">
                                <option value="" disabled selected>-- Select Ward --</option>
                                <option v-for="ward in wards" :key="ward.id" :value="ward.id">{{ ward.full_name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product Information -->
            <div class="flex-[2] h-fit flex flex-col text-black p-4 text-2xl border-black border">
                <div class="flex flex-col gap-2 w-full">
                    <p class="font-semibold">Product</p>
                    <div class="flex flex-row gap-5 h-40 w-full bg-white justify-start items-center p-5">
                        <img class="object-cover w-28 h-32" :src="itemPath" alt="Product Image">
                        <div class="flex flex-col h-full w-full justify-center items-start gap-5 text-lg">
                            <p class="font-semibold">{{ product.name }}</p>
                            <div class="flex flex-row justify-center items-center w-full">
                                <div class="flex-1 flex flex-row">
                                    <p>x</p>
                                    <p>{{ product.number }}</p>
                                </div>
                                <div class="flex-1 flex flex-row justify-end text-red-500">
                                    <p>{{ (product.price * product.number).toLocaleString() }}</p>
                                    <p class="text-sm">VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Payment Method and Details -->
                <div class="flex flex-col gap-5 w-full p-5">
                    <p class="font-semibold">Payment Method</p>
                    <select class="p-2 border rounded-lg" v-model="selectedPaymentMethod">
                        <option value="" disabled selected>-- Select Payment Method --</option>
                        <option value="1">Credit Card</option>
                        <option value="2">PayPal</option>
                        <option value="3">Bank Transfer</option>
                    </select>
                </div>

                <div class="flex flex-col gap-5 w-full p-5">
                    <p class="font-semibold">Payment details</p>
                    <div class="flex flex-col gap-2 w-full text-xl">
                        <div class="flex flex-row w-full">
                            <p class="flex-1">Merchandise Subtotal</p>
                            <div class="flex flex-row text-red-500">
                                <p>{{ (product.price * product.quantity).toLocaleString() }}</p>
                                <p class="text-sm">VNĐ</p>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <p class="flex-1">Shipping Subtotal</p>
                            <div class="flex flex-row text-red-500">
                                <p>{{ shippingFee.toLocaleString() }}</p>
                                <p class="text-sm">VNĐ</p>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <p class="flex-1 font-semibold">Total Payment</p>
                            <div class="flex flex-row text-red-500">
                                <p>{{ (product.price * product.quantity + shippingFee).toLocaleString() }}</p>
                                <p class="text-sm">VNĐ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Order Button -->
                <div class="w-full flex justify-end">
                    <button class="w-40 h-12 rounded-xl bg-orange-500" type="button" @click="placeOrder">Place
                        Order</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import item from '@/components/images/item/item.png';
import axios from 'axios';
import api from '../../services/api';

export default {
    data() {
        return {
            itemPath: item,
            cities: [],
            districts: [],
            wards: [],
            selectedCity: '',
            selectedDistrict: '',
            selectedWard: '',
            selectedPaymentMethod: '',
            account: '',
            fullName: '',
            phoneNumber: '',
            address: '',
            product: {},  // Example product data
            shippingFee: 30000  // Example shipping fee
        };
    },
    mounted() {
        this.fetchCities();
        this.fetchProduct();
    },
    methods: {
        fetchProduct() {
            try {
                api
                    .get('/product/' + this.$route.query.idProduct)
                    .then((res) => {
                        this.product = res.data.data
                        this.product.number = this.$route.query.quantity
                    })
            } catch (error) {
                console.error('Error fetching cities:', error);

            }
        },
        async fetchCities() {
            try {
                const response = await axios.get('https://esgoo.net/api-tinhthanh/1/0.htm');
                if (response.data.error === 0) {
                    this.cities = response.data.data;
                }
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        },
        async fetchDistricts() {
            try {
                if (!this.selectedCity) return;
                const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${this.selectedCity}.htm`);
                if (response.data.error === 0) {
                    this.districts = response.data.data;
                    this.wards = [];
                }
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        },
        async fetchWards() {
            try {
                if (!this.selectedDistrict) return;
                const response = await axios.get(`https://esgoo.net/api-tinhthanh/3/${this.selectedDistrict}.htm`);
                if (response.data.error === 0) {
                    this.wards = response.data.data;
                }
            } catch (error) {
                console.error('Error fetching wards:', error);
            }
        },
        placeOrder() {
            // Add your place order logic here
            alert('Order placed!');
        }
    }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
