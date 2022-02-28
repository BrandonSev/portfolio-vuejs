<template>
    <router-link :to="url" class="button pulse">
        {{ linkText }}
    </router-link>
</template>

<script setup>
    defineProps({
        linkText: String,
        url: String
    })
</script>

<style lang="scss" scoped>

</style>