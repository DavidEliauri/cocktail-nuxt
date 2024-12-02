<script setup lang="ts"></script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="layout">
                <div class="layout__sidebar">
                    <TheSidebar />
                </div>

                <div class="layout__content">
                    <div>
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
        @media (min-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 100vh;

            & > * {
                width: 100%;
            }
        }
    }

    .layout {
        margin: 24px 0;
        border: 1px solid black;

        @media (min-width: 768px) {
            display: flex;
        }

        &__sidebar {
            @media (min-width: 768px) {
                flex: 0 0 150px;

                & > * {
                    height: 100%;
                }
            }
        }

        &__content {
            padding: 24px;

            @media (min-width: 768px) {
                flex: 1;
            }
        }
    }
</style>
