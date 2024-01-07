import { reactive } from 'vue'

export const menu = reactive({
    pizzas:  
    [
        {
            id: 0,
            image: 'https://imag.bonviveur.com/pizza-margarita.webp',
            name: "Margarita",
            ingredients: ['Tomate', 'Mozzarella', 'oregano'],
            alergenics: ['gluten', 'lacteos'],
            price: 8.0
        },
        {
            id: 1,
            image: 'https://bing.com/th?id=OSK.f9da6e7e891d35e17ee1f8808a3068a4',
            name: "Clásica",
            ingredients: ['Tomate', 'mozzarella', 'oregano', 'jamón cocido', 'champiniones'],
            alergenics: ['gluten', 'lacteos', 'soja'],
            price: 10.0
        },
    ]
      
})



