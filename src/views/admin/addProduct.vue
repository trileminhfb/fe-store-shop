<template>
    <div class="h-fit w-[80vw] mt-32 ml-[22rem] flex flex-row border-2">
        <div class="flex flex-col h-fit items-center justify-center m-20">
            <div class="h-60 w-60 border-2 border-black">
                <img class="object-cover h-full" :src="itemPath" alt="Product Image">
            </div>
        </div>
        <div class="flex flex-1 flex-col h-fit p-12">
            <div class="h-full w-full flex flex-col gap-5 justify-start text-xl font-semibold">
                <input class="font-bold text-3xl border" placeholder="Name Product" type="text">
                <input class="h-20 border" placeholder="Description" type="text">
                <div class="flex flex-row w-96 gap-5">
                    <div class="flex-row flex gap-2 flex-1">
                        <input class="w-32 border text-end" placeholder="Quantity" type="number">
                        <p>Available</p>
                    </div>
                    <div class="flex-row flex gap-2 flex-1">
                        <input class="w-32 border text-end" placeholder="Price" type="number">
                        <p>VNĐ</p>
                    </div>
                </div>
                <div class="flex flex-row gap-5 items-center">
                    <select v-model="selectedGender" class="border p-2 w-32 h-12 text-base">
                        <option value="1">MEN</option>
                        <option value="0">WOMEN</option>
                    </select>
                    <p class="bg-green-500 h-12 flex items-center">Available</p>
                </div>

                <div class="flex flex-row gap-5">
                    <input class="border w-60" placeholder="Category" type="text">
                    <input class="border w-60" placeholder="Brand" type="text">
                </div>
                <button class="w-20 h-12 rounded-xl bg-orange-500" type="button">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import item from '@/components/images/item/item.png';

export default {
    data() {
        return {
            itemPath: item, // Đường dẫn hình ảnh
            selectedGender: '1', // Giá trị mặc định cho dropdown
        };
    },
};
</script>

<style></style>
