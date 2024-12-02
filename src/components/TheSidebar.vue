<script setup lang="ts">
    const appConfig = useAppConfig();

    const cocktails = computed(() => appConfig.cocktailsCodes);
</script>

<template>
    <aside class="sidebar">
        <nav>
            <ul class="sidebar__list">
                <li
                    v-for="cocktail in cocktails"
                    :key="cocktail.code"
                    class="sidebar__list-item"
                >
                    <NuxtLink
                        :href="`/cocktails/${cocktail.code}`"
                        class="sidebar__list-link"
                    >
                        {{ cocktail.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
    .sidebar {
        padding: 24px;
        border-bottom: 1px solid black;

        @media (min-width: 768px) {
            border: none;
            border-right: 1px solid black;
        }

        &__list {
            font-size: 18px;

            & > * {
                margin-top: 4px;

                &:first-child {
                    margin-top: 0;
                }
            }
        }

        &__list-link {
            display: block;
            margin: 0 -24px;
            padding: 8px 24px;
            color: inherit;
            text-decoration: none;
            border: 2px solid transparent;

            &.router-link-exact-active,
            &:hover {
                background: rgba($color: black, $alpha: 0.1);
                border-color: rgba($color: black, $alpha: 0.3);
            }
        }
    }
</style>
