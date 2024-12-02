<script setup lang="ts">
    import { useCocktailStore } from '@/stores/cocktail';

    const route = useRoute();

    const cocktailCode = computed(() => (route.params.slug as string) || '');

    const cocktailStore = useCocktailStore();

    const cocktails = computed(
        () =>
            cocktailStore.cocktails.find(
                cocktail => cocktail.cocktailCode === cocktailCode.value,
            )?.cocktails ?? [],
    );

    await useAsyncData(
        `cocktail-${cocktailCode.value}`,
        () => cocktailStore.getCocktails(cocktailCode.value).then(() => true),
        {
            getCachedData: () => {
                return cocktails.value.length > 0 ? true : undefined;
            },
        },
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
            margin-top: 40px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
</style>
