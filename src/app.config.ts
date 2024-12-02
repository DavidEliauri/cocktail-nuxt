export default defineAppConfig({
    cocktailsCodes: [
        {
            name: 'Margarita',
            code: 'margarita',
        },
        {
            name: 'Mojito',
            code: 'mojito',
        },
        {
            name: 'A1',
            code: 'a1',
        },
        {
            name: 'Kir',
            code: 'kir',
        },
    ] satisfies {
        name: string;
        code: string;
    }[],
});