<script setup lang="ts">
    import CocktailApi from '@/api/Cocktail/CocktailApi';

    const route = useRoute();

    const cocktailName = computed(() => (route.params.slug as string) || '');

    const { data: cocktails } = await useAsyncData(
        `cocktail-${cocktailName.value}`,
        () => CocktailApi.getCocktails(cocktailName.value),
    );
</script>

<template>
    <div class="posts-list">
        <CocktailSingle
            v-for="cocktail in cocktails"
            :key="cocktail.id"
            :cocktail="cocktail"
        />
    </div>
</template>

<style lang="scss" scoped>
    .posts-list {
        & > * {
            margin-top: 32px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
</style>
