<script setup lang="ts"></script>

<template>
    <aside class="sidebar">
        <nav>
            <ul class="sidebar__list">
                <li class="sidebar__list-item">
                    <a
                        href="#"
                        class="sidebar__list-link"
                    >
                        Margarita
                    </a>
                </li>

                <li class="sidebar__list-item">
                    <a
                        href="#"
                        class="sidebar__list-link"
                    >
                        Mojito
                    </a>
                </li>

                <li class="sidebar__list-item">
                    <a
                        href="#"
                        class="sidebar__list-link"
                    >
                        A1
                    </a>
                </li>

                <li class="sidebar__list-item">
                    <a
                        href="#"
                        class="sidebar__list-link"
                    >
                        Kir
                    </a>
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
        }

        &__list-link {
            display: block;
            margin: 0 -24px;
            padding: 8px 24px;
            color: inherit;
            text-decoration: none;
            border: 2px solid transparent;

            &.active,
            &:hover {
                background: rgba($color: black, $alpha: 0.1);
                border-color: rgba($color: black, $alpha: 0.3);
            }
        }
    }
</style>
