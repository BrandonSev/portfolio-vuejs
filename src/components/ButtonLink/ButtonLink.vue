<template>
    <router-link :to="url" class="button pulse" @click="handleActiveMenu">
        {{ linkText }}
    </router-link>
</template>

<script setup>
    defineProps({
        linkText: String,
        url: String
    })
    const handleActiveMenu = (e) => {
      const activeMenu = new CustomEvent('activemenu', {detail : e.target.pathname})
      dispatchEvent(activeMenu)
    }
</script>

<style lang="scss" scoped>

</style>