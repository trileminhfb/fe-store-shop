<template>
    <div class="h-fit w-[80vw] mt-32 ml-[22rem] flex flex-row border-2">
        <div class="flex flex-col h-fit items-center justify-center m-20">
            <div class="h-60 w-60 border-2 border-black">
                <img class="object-cover h-full" :src="itemPath" alt="">
            </div>
        </div>
        <div class="flex flex-1 flex-col h-fit p-12">
            <div class="h-full w-full flex flex-col gap-5 justify-start text-xl font-semibold">
                <p class="font-bold text-3xl">Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, consequuntur.</p>
                <div class="flex flex-row w-96 gap-5">
                    <div class="flex-row flex gap-2 flex-1">
                        <p>100</p>
                        <p>Available</p>
                    </div>
                    <div class="flex-row flex gap-2 flex-1">
                        <p>90000</p>
                        <p>VNĐ</p>
                    </div>
                </div>
                <p>Available</p>
                <p>Đồ nam</p>
                <p>Balenciaga</p>
                <p>MEN</p>
                <!-- Nút Edit -->
                <button class="w-20 h-12 rounded-xl bg-orange-500" type="button" @click="goToEditProduct">
                    Edit
                </button>
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
        goToEditProduct() {
            this.$router.push({ name: 'EditProduct' }); // Điều hướng tới trang editProduct
        },
    },
};
</script>


<style></style>