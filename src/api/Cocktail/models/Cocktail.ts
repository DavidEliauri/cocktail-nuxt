interface Ingredient {
    ingredient: string;
    measure: string;
}

export default interface Cocktail {
    id: string;
    name: string;
    ingredients: Ingredient[];
    image?: string;
    category?: string;
    alcoholic?: string;
    glass?: string;
    instructions?: string;
}

export function cocktailFromApi(map: Record<string, any>): Cocktail {
    const ingredients: Ingredient[] = [];

    for (let index = 0; index < 15; index++) {
        const ingredient = map[`strIngredient${index + 1}`],
            measure = map[`strMeasure${index + 1}`];

        if (!ingredient || !measure) {
            break;
        }

        ingredients.push({
            ingredient,
            measure,
        });
    }

    return {
        id: map.idDrink,
        name: map.strDrink,
        ingredients: ingredients,
        image: map.strDrinkThumb,
        category: map.strCategory,
        alcoholic: map.strAlcoholic,
        glass: map.strGlass,
        instructions: map.strInstructions,
    };
}
