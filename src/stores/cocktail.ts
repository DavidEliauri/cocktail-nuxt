import type Cocktail from '@/api/Cocktail/models/Cocktail';
import CocktailApi from '@/api/Cocktail/CocktailApi';

export const useCocktailStore = defineStore('cocktailStore', () => {
    const cocktails = ref<{ cocktailCode: string; cocktails: Cocktail[] }[]>(
        [],
    );

    async function getCocktails(cocktailCode: string) {
        const result = await CocktailApi.getCocktails(cocktailCode);

        if (cocktails.value.find(item => item.cocktailCode === cocktailCode)) {
            cocktails.value = cocktails.value.map(item => {
                if (item.cocktailCode === cocktailCode) {
                    item.cocktails = result;
                }

                return item;
            });

            return;
        }

        cocktails.value = [
            ...cocktails.value,
            { cocktailCode, cocktails: result },
        ];
    }

    return { cocktails, getCocktails };
});
