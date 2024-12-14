<template>
    <div class="h-20 w-full fixed top-0">
        <div class="h-20 bg-black flex flex-row text-white items-center pl-5 gap-5">
            <router-link :to="{ name: 'adminHome' }" class="">
                <div class="rounded-full h-16 w-16 bg-white overflow-hidden">
                    <img class="object-cover" :src="logoPath" alt="Logo">
                </div>
            </router-link>
            <div class="h-16 w-full flex justify-start items-center uppercase font-extrabold italic text-6xl">
                <p>chcope shop</p>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '@/components/images/logo/logo.png';
export default {
    data() {
        return {
            logoPath: logo,
        };
    },
};
</script>

<style></style>