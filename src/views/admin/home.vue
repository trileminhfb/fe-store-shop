<template>
    <div class="h-fit w-[80vw] mt-20 ml-[22rem]">
        <!-- Button dẫn đến addProduct -->
        <div class="w-full h-24 flex justify-end pr-5 items-center">
            <button @click="navigateToAddProduct" class="h-20 w-32 bg-blue-500 rounded-3xl text-white font-semibold"
                type="button">
                + Add
            </button>
        </div>
        <!-- Table hiển thị sản phẩm -->
        <div class="h-fit w-full border border-black flex flex-col">
            <div
                class="flex flex-row items-center justify-center w-full h-20 uppercase font-semibold border-2 border-black bg-gray-400">
                <p class="flex-1 flex items-center justify-center border h-full">number</p>
                <p class="flex-1 flex items-center justify-center border h-full">picture</p>
                <p class="flex-[4] flex items-center justify-center border h-full">name product</p>
                <p class="flex-1 flex items-center justify-center border h-full">quantity</p>
                <p class="flex-1 flex items-center justify-center border h-full">status</p>
            </div>
            <div class="flex flex-col items-start w-full h-full font-medium gap-2">
                <a href="/product" class="flex flex-row w-full h-32 border">
                    <p class="flex-1 flex items-center justify-center">001</p>
                    <div class="flex-1 flex items-center justify-center h-full">
                        <div class="h-full w-28 overflow-hidden border">
                            <img class="h-full object-cover" :src="itemPath" alt="Product Image">
                        </div>
                    </div>
                    <p class="flex-[4] flex items-center justify-center h-full">Lorem ipsum dolor sit amet.</p>
                    <p class="flex-1 flex items-center justify-center h-full">200</p>
                    <p class="flex-1 flex items-center justify-center h-full bg-green-500">Available</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import item from '@/components/images/item/item.png';
export default {
    data() {
        return {
            itemPath: item,
        };
    },
    methods: {
        navigateToAddProduct() {
            this.$router.push('/addProduct'); // Điều hướng đến addProduct
        },
    },
};
</script>
