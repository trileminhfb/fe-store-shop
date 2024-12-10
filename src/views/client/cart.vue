<template>
    <div class="w-full h-fit flex flex-col justify-center items-center mt-32">
        <div class="w-[60vw] h-full flex justify-start items-center flex-col gap-5 p-5">
            <div class="flex flex-row w-full gap-2">
                <p class="font-extrabold text-3xl text-left">Cart (</p>
                <p class="font-extrabold text-3xl text-left">2</p>
                <p class="font-extrabold text-3xl text-left">Product)</p>
            </div>

            <div class="w-full bg-white h-full rounded-3xl border border-black p-5 flex flex-col">
                <div class="w-full h-10 bg-gray-300 flex flex-row items-center pl-5 font-bold">
                    <div class="flex-[6]">Product</div>
                    <div class="flex-[3]">Quantity</div>
                    <div class="flex-[3]">Price</div>
                    <div class="flex-1"></div>
                </div>

                <div class="w-full flex flex-col gap-5">
                    <div class="w-full h-40 flex flex-row items-center pl-5 border border-black">
                        <div class="flex-[6] flex flex-row gap-5 justify-start items-center">
                            <img class="w-28 h-32" :src="itemPath" alt="">
                            <p class="font-semibold">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="flex-[3]">
                            <input class="border-black border text-end h-10 w-32 pr-2" type="number" value="1" min="1">
                        </div>
                        <div class="flex-[3] flex flex-row">
                            <p>500.000</p>
                            <p class="text-sm">VNĐ</p>
                        </div>
                        <div class="flex-1">
                            <button type="button">
                                <svg class="w-10 h-10 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="w-full h-40 flex flex-row items-center pl-5 border border-black">
                        <div class="flex-[6] flex flex-row gap-5 justify-start items-center">
                            <img class="w-28 h-32" :src="itemPath" alt="">
                            <p class="font-semibold">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="flex-[3]">
                            <input class="border-black border text-end h-10 w-32 pr-2" type="number" value="1" min="1">
                        </div>
                        <div class="flex-[3] flex flex-row">
                            <p>500.000</p>
                            <p class="text-sm">VNĐ</p>
                        </div>
                        <div class="flex-1">
                            <button type="button">
                                <svg class="w-10 h-10 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                </svg>
                            </button>

                        </div>
                    </div>

                    <div class="w-full h-40 flex flex-row items-center pl-5 border border-black">
                        <div class="flex-[6] flex flex-row gap-5 justify-start items-center">
                            <img class="w-28 h-32" :src="itemPath" alt="">
                            <p class="font-semibold">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="flex-[3]">
                            <input class="border-black border text-end h-10 w-32 pr-2" type="number" value="1" min="1">
                        </div>
                        <div class="flex-[3] flex flex-row">
                            <p>500.000</p>
                            <p class="text-sm">VNĐ</p>
                        </div>
                        <div class="flex-1">
                            <button type="button">
                                <svg class="w-10 h-10 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                    <div class="w-full h-fit flex justify-end">
                        <button class="bg-orange-500 w-32 h-16 rounded-2xl font-bold text-2xl"
                            type="button">BUY</button>
                    </div>
                </div>

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
};
</script>
<style></style>