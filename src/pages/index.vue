<script setup lang="ts">
    definePageMeta({
        middleware: [
            () => {
                const appConfig = useAppConfig();

                return navigateTo(
                    `/cocktails/${appConfig.cocktailsCodes[0].code}`,
                );
            },
        ],
    });
</script>

<template>
    <div></div>
</template>
