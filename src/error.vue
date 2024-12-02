<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps<{
        error: NuxtError;
    }>();
</script>

<template>
    <NuxtLoadingIndicator />

    <NuxtRouteAnnouncer />

    <NuxtLayout>
        <main v-if="props.error.statusCode === 404">
            <h1>404. Page not found</h1>
        </main>
    </NuxtLayout>
</template>

<style lang="scss" scoped></style>
