import pastaCarbonara from '../../../../public/Images/pastaCarbonara.jpg'
import chickenTacos from '../../../../public/Images/chickenTacos.jpg'
import pastaBolognese from '../../../../public/Images/pastaBolognese.jpg'
import vetnameseSpringrolls from '../../../../public/Images/vetnameseSpringrolls.jpg'

export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    image: string;
  }
  
  export const recipes: Recipe[] = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan cheese', 'Black pepper'],
      instructions: [
        'Cook spaghetti,',
        'mix eggs with grated Parmesan cheese...'],
      image: pastaCarbonara,
    },
    {
      id: 2,
      name: 'Chicken Tacos',
      ingredients: ['Chicken', 'Tortillas', 'Salsa', 'Lettuce', 'Cheese'],
      instructions: [
        'Season and cook chicken', 
        'assemble tacos with toppings...'],
      image: chickenTacos,
    },
    {
        id: 3,
        name: 'Pasta Bolognese',
        ingredients: [
            '1 lb ground beef', 
            '1 onion, chopped', 
            '2 cloves garlic, minced', 
            '1 (28 oz) can crushed tomatoes', 
            '1/4 cup tomato paste',
            '1/2 cup red wine',
            '1/4 cup fresh basil, chopped',
            '1/4 cup fresh parsley, chopped',
            '1 tsp dried oregano',
            'Salt and black pepper to taste',
            '12 oz spaghetti',
            'Grated Parmesan cheese for serving',
            ],
        instructions: [
            'In a large skillet, cook the ground beef over medium heat.',
            'Drain any excess fat.' ,
            'Add the chopped onion and minced garlic to the skillet.',
            'Sauté until the onions are translucent.',
            'Stir in the crushed tomatoes, tomatopaste, redwine, fresh basil, fresh parsley, dried oregano, salt, and black pepper.',
            'Simmer the sauce for about 30 minutes, stirring occasionally.',
            'This allows the flavors to meld and the sauce to thicken. Meanwhile, cook the spaghetti according to the package instructions.',
            'Drain when it is al dente.',
            'Serve the Bolognese sauce over the cooked spaghetti.',
            'Garnish with grated Parmesan cheese.',
            'Enjoy your delicious homemade Spaghetti Bolognese!'],
        image: pastaBolognese,
      },
      {
        id: 4,
        name: 'Vegetarian Spinach and Mushroom Lasagna',
        ingredients: [
        '9 lasagna noodles, cooked and drained',
        '2 cups ricotta cheese',
        '2 cups shredded mozzarella cheese',
        '1 cup grated Parmesan cheese',
        '2 cups fresh spinach, chopped',
        '2 cups mushrooms, sliced',
        '1 small onion, chopped',
        '2 cloves garlic, minced',
        '1 (24 oz) jar marinara sauce',
        '1 teaspoon dried basil',
        '1 teaspoon dried oregano',
        'Salt and black pepper to taste'],
        instructions:  [
            "Preheat the oven to 375°F (190°C).",
            "In a skillet, sauté mushrooms, onions, and garlic until tender. Stir in spinach and cook until wilted. Season with salt, black pepper, basil, and oregano.",
            "In a large mixing bowl, combine ricotta cheese, 1 cup mozzarella cheese, and 1/2 cup Parmesan cheese.",
            "Spread a small amount of marinara sauce on the bottom of a 9x13-inch baking dish. Layer with 3 lasagna noodles, half of the cheese mixture, and half of the spinach-mushroom mixture. Repeat the layers.",
            "Top with remaining 3 lasagna noodles and remaining marinara sauce. Sprinkle with the remaining mozzarella and Parmesan cheese.",
            "Cover with foil and bake for 25 minutes. Remove the foil and bake for an additional 15 minutes until cheese is bubbly and golden.",
            "Let it cool for a few minutes before serving."
          ],
        image: chickenTacos,
      },
      {
        id: 5,
        name: 'Vietnamese Spring Rolls',
        ingredients: ['Rice paper', 'Glas noodles', 'Carrots', 'Lettuce', 'Cucumber', 'Mango', 'Avocado', 'Halloumi', 'Peanut Butter', 'Hoisin Sause', 'Fresh Thyme', 'Sunflower Seeds', 'Salt'],
        instructions: [
            'Start by chopping all the vegetables and mango into thin leghts and plate them on a large serving dish', 
            'Fry the halloumi cheese and chop it up into thin pieces', 
            'Boil the glas noodles for 2 minutes and rinse them off in cold water',
            'Put the sunflower seeds into a fryingpan and toast them together with some salt',
            'Make the sauce by mixing together the hoisin sauce with peanutbutter. Put as much of the ingredients of the sauce as you like',
            'Put a shallow but large bowl of water on the table to dip the rice paper in', 
            'Serve like tacos, where everyone around the table can make their own springroll!',
            'Enjoy!!'],
        image: vetnameseSpringrolls,
      },
  ];

