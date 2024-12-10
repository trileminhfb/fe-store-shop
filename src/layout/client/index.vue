<template>
    <HeaderClient></HeaderClient>

    <router-view> </router-view>
</template>
<script>
import HeaderClient from './header.vue';
export default {
    name: 'app',
    components: {
        HeaderClient,
    }
}
</script>