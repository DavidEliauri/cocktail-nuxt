import AxiosInstance from '@/api/Cocktail/AxiosInstance';
import type Cocktail from '@/api/Cocktail/models/Cocktail';
import { cocktailFromApi } from '@/api/Cocktail/models/Cocktail';

const CocktailApi = {
    async getCocktails(cocktailName: string): Promise<Cocktail[]> {
        const response = await AxiosInstance.get('/search.php', {
            params: {
                s: cocktailName,
            },
        });

        return (response.data.drinks as any[]).map(cocktailFromApi);
    },
};

export default CocktailApi;
