<script setup lang="ts"></script>

<template>
    <div class="post-single">
        <div class="post-single__img-wrapper">
            <img
                src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                alt="Cocktail"
                class="post-single__img"
            />
        </div>

        <div class="post-single__content">
            <h1 class="post-single__title">strDrink</h1>

            <div class="post-single__content-blocks">
                <div>
                    <div>strCategory</div>

                    <div>strAlcoholic</div>

                    <div>strGlass</div>
                </div>

                <div>
                    <div class="post-single__content-block-title">
                        Instructions:
                    </div>

                    <div>strinstructions</div>
                </div>

                <div>
                    <div class="post-single__content-block-title">
                        List of ingredients:
                    </div>

                    <div class="post-single__content-list-column">
                        <ul>
                            <li>strMeasure1</li>

                            <li>strMeasure2</li>
                        </ul>

                        <ul>
                            <li>stringredient1</li>

                            <li>stringredient2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .post-single {
        @media (min-width: 768px) {
            display: flex;
        }

        &__img-wrapper {
            margin-bottom: 24px;

            @media (min-width: 768px) {
                margin-bottom: 0;
                order: 1;
                flex: 0 0 200px;
                margin-left: 24px;
            }
        }

        &__img {
            display: block;
            width: 100%;
            object-fit: cover;
            aspect-ratio: 4 / 3;
        }

        &__content {
            @media (min-width: 768px) {
                flex: 0 1 300px;
            }
        }

        &__title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
        }

        &__content-blocks {
            & > * {
                margin-top: 8px;

                &:first-child {
                    margin-top: 0;
                }
            }
        }

        &__content-block-title {
            margin-bottom: 4px;
        }

        &__content-list-column {
            display: flex;
            gap: 8px;

            & > * {
                flex: 1 1 50%;
            }
        }
    }
</style>
