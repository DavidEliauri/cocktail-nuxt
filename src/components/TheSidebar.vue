<script setup lang="ts"></script>

<template>
    <aside class="sidebar">
        <nav>
            <ul class="sidebar__list">
                <li class="sidebar__list-item">
                    <NuxtLink
                        href="/margarita"
                        class="sidebar__list-link"
                    >
                        Margarita
                    </NuxtLink>
                </li>

                <li class="sidebar__list-item">
                    <NuxtLink
                        href="/mojito"
                        class="sidebar__list-link"
                    >
                        Mojito
                    </NuxtLink>
                </li>

                <li class="sidebar__list-item">
                    <NuxtLink
                        href="/a1"
                        class="sidebar__list-link"
                    >
                        A1
                    </NuxtLink>
                </li>

                <li class="sidebar__list-item">
                    <NuxtLink
                        href="/kir"
                        class="sidebar__list-link"
                    >
                        Kir
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
