<template>
    <HeaderAdmin></HeaderAdmin>
    <LeftMenuAdmin></LeftMenuAdmin>

    <router-view> </router-view>
</template>
<script>
import HeaderAdmin from './header.vue';
import LeftMenuAdmin from './leftMenu.vue';
export default {
    name: 'app',
    components: {
        HeaderAdmin,
        LeftMenuAdmin
    }
}
</script>