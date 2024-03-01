<script setup lang="ts">
    const props = defineProps<{
        src: string
    }>()

    const img = useImage()
</script>
<template>
     <div
        class="avatar"
    >
        <NuxtImg
            :src="src"
            :placeholder="img(src, { blur: 5, f: 'png', h: 300})"
            loading="lazy"
            class="transition rounded-full hover:scale-105"
        />
    </div>
</template>
<style lang="scss" scoped>
.avatar{
    @apply ring-2 hover:ring-4 ring-shamrock-400 p-1 hover:p-0 transition-[padding,box-shadow] overflow-hidden w-[200px] md:w-[250px] lg:w-[300px] mx-auto rounded-full;
}
@media screen and (max-width: 640px) {
    .avatar{
        @apply size-[150px];
    }
}
</style>
