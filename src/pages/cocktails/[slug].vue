<script setup lang="ts">
    import { useCocktailStore } from '@/stores/cocktail';

    const route = useRoute();

    const cocktailCode = computed(() => (route.params.slug as string) || '');

    const appConfig = useAppConfig();

    const cocktailName = computed(() => {
        return appConfig.cocktailsCodes.find(
            cocktail => cocktail.code === cocktailCode.value,
        )?.name;
    });

    useSeoMeta({
        title: cocktailName.value ?? cocktailCode.value,
    });

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
    <div>
        <div
            v-if="cocktails.length"
            class="posts-list"
        >
            <CocktailSingle
                v-for="cocktail in cocktails"
                :key="cocktail.id"
                :cocktail="cocktail"
            />
        </div>

        <div v-else>No cocktails found</div>
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
