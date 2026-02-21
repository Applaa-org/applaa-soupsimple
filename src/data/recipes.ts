export interface Ingredient {
  item: string;
  amount: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  category: 'Vegetarian' | 'Meat' | 'Creamy' | 'Clear';
  image: string;
  ingredients: Ingredient[];
  steps: string[];
  difficulty: 'Beginner' | 'Easy';
}

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'creamy-tomato-basil',
    title: 'Creamy Tomato Basil',
    description: 'A classic, comforting hug in a bowl. Perfect with a side of grilled cheese.',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    category: 'Creamy',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
    ingredients: [
      { item: 'Canned crushed tomatoes', amount: '28 oz' },
      { item: 'Vegetable broth', amount: '2 cups' },
      { item: 'Heavy cream', amount: '1/2 cup' },
      { item: 'Fresh basil leaves', amount: '1/4 cup' },
      { item: 'Garlic cloves, minced', amount: '3' }
    ],
    steps: [
      'In a large pot, sauté minced garlic in a splash of olive oil until fragrant (about 1 minute).',
      'Pour in the crushed tomatoes and vegetable broth. Bring to a gentle simmer.',
      'Let it simmer for 15 minutes to allow flavors to meld.',
      'Stir in the heavy cream and fresh basil. Season with salt and pepper.',
      'Use an immersion blender for a smooth texture, or leave chunky if preferred. Serve warm.'
    ]
  },
  {
    id: '2',
    slug: 'one-pot-lentil-stew',
    title: 'One-Pot Hearty Lentil',
    description: 'Protein-packed and incredibly filling. This stew gets better the next day.',
    prepTime: '5 mins',
    cookTime: '30 mins',
    servings: 6,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1547592115-856af4ec3527?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
    ingredients: [
      { item: 'Dried brown lentils', amount: '1 cup' },
      { item: 'Vegetable broth', amount: '4 cups' },
      { item: 'Carrots, diced', amount: '2' },
      { item: 'Onion, chopped', amount: '1' },
      { item: 'Spinach leaves', amount: '2 cups' }
    ],
    steps: [
      'Rinse lentils thoroughly under cold water.',
      'In a pot, sauté the onion and carrots until the onion is translucent.',
      'Add lentils and broth. Bring to a boil, then reduce heat to low.',
      'Cover and simmer for 25 minutes until lentils are tender.',
      'Stir in the spinach until wilted. Add salt and pepper to taste.'
    ]
  },
  {
    id: '3',
    slug: 'golden-potato-leek',
    title: 'Golden Potato Leek',
    description: 'Silky smooth and naturally sweet from the caramelized leeks.',
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 4,
    category: 'Creamy',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Easy',
    ingredients: [
      { item: 'Potatoes, peeled and cubed', amount: '1.5 lbs' },
      { item: 'Leeks, sliced (white parts only)', amount: '3 large' },
      { item: 'Chicken or Veg broth', amount: '4 cups' },
      { item: 'Butter', amount: '2 tbsp' },
      { item: 'Thyme sprigs', amount: '2' }
    ],
    steps: [
      'Melt butter in a pot and sauté leeks until soft and golden.',
      'Add cubed potatoes and thyme sprigs to the pot.',
      'Pour in the broth and bring to a boil.',
      'Simmer for 20 minutes until potatoes are fork-tender.',
      'Remove thyme, blend until smooth, and season generously.'
    ]
  },
  {
    id: '4',
    slug: 'quick-chicken-noodle',
    title: 'Quick Chicken Noodle',
    description: 'The ultimate remedy for a cold day. Simple, clear, and restorative.',
    prepTime: '5 mins',
    cookTime: '15 mins',
    servings: 4,
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
    ingredients: [
      { item: 'Cooked rotisserie chicken, shredded', amount: '2 cups' },
      { item: 'Chicken broth', amount: '6 cups' },
      { item: 'Egg noodles', amount: '2 cups' },
      { item: 'Celery, sliced', amount: '2 stalks' },
      { item: 'Dried parsley', amount: '1 tsp' }
    ],
    steps: [
      'Bring chicken broth and sliced celery to a boil in a large pot.',
      'Add egg noodles and cook for 8 minutes or until tender.',
      'Stir in the shredded chicken and parsley.',
      'Simmer for 2 more minutes until the chicken is heated through.',
      'Taste and add salt or a squeeze of lemon for brightness.'
    ]
  },
  {
    id: '5',
    slug: 'spiced-butternut-squash',
    title: 'Spiced Butternut Squash',
    description: 'A velvety autumn favorite with a hint of warming nutmeg.',
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 4,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
    ingredients: [
      { item: 'Butternut squash, cubed', amount: '4 cups' },
      { item: 'Vegetable broth', amount: '3 cups' },
      { item: 'Coconut milk', amount: '1/2 cup' },
      { item: 'Maple syrup', amount: '1 tbsp' },
      { item: 'Ground nutmeg', amount: '1/4 tsp' }
    ],
    steps: [
      'Combine squash and broth in a pot. Bring to a boil.',
      'Reduce heat and simmer for 20 minutes until squash is very soft.',
      'Stir in coconut milk, maple syrup, and nutmeg.',
      'Blend the mixture until completely smooth and creamy.',
      'Serve with a swirl of coconut milk or toasted pumpkin seeds.'
    ]
  },
  {
    id: '6',
    slug: 'zesty-black-bean',
    title: 'Zesty Black Bean',
    description: 'A smoky, slightly spicy soup that comes together in minutes.',
    prepTime: '5 mins',
    cookTime: '15 mins',
    servings: 4,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
    ingredients: [
      { item: 'Canned black beans, drained', amount: '2 cans' },
      { item: 'Salsa (mild or medium)', amount: '1 cup' },
      { item: 'Vegetable broth', amount: '1 cup' },
      { item: 'Cumin', amount: '1 tsp' },
      { item: 'Lime juice', amount: '1 tbsp' }
    ],
    steps: [
      'In a pot, combine black beans, salsa, broth, and cumin.',
      'Bring to a simmer over medium heat for 10 minutes.',
      'Use a potato masher to crush some beans for a thicker texture.',
      'Stir in the lime juice just before serving.',
      'Top with avocado or Greek yogurt if desired.'
    ]
  },
  {
    id: '7',
    slug: 'miso-ginger-clear-soup',
    title: 'Miso Ginger Clear Soup',
    description: 'Light, fragrant, and perfect for a quick healthy lunch.',
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    category: 'Clear',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
    ingredients: [
      { item: 'Miso paste', amount: '2 tbsp' },
      { item: 'Water', amount: '3 cups' },
      { item: 'Fresh ginger, grated', amount: '1 tbsp' },
      { item: 'Green onions, sliced', amount: '2' },
      { item: 'Silken tofu, cubed', amount: '1/2 cup' }
    ],
    steps: [
      'Bring water and grated ginger to a very gentle simmer.',
      'Place miso paste in a small bowl, add a little warm water, and whisk until smooth.',
      'Add the tofu cubes to the pot and heat for 2 minutes.',
      'Turn off the heat and stir in the dissolved miso paste (do not boil miso).',
      'Garnish with sliced green onions and serve immediately.'
    ]
  },
  {
    id: '8',
    slug: 'rustic-sausage-kale',
    title: 'Rustic Sausage & Kale',
    description: 'A hearty, savory soup inspired by Italian countryside cooking.',
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 4,
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Easy',
    ingredients: [
      { item: 'Italian sausage, casings removed', amount: '1 lb' },
      { item: 'Chicken broth', amount: '4 cups' },
      { item: 'Kale, chopped', amount: '3 cups' },
      { item: 'Cannellini beans, rinsed', amount: '1 can' },
      { item: 'Red pepper flakes', amount: 'pinch' }
    ],
    steps: [
      'Brown the sausage in a large pot, breaking it into small pieces.',
      'Add the chicken broth and cannellini beans to the pot.',
      'Bring to a simmer and cook for 10 minutes.',
      'Stir in the chopped kale and red pepper flakes.',
      'Cook for 5 more minutes until kale is tender. Season to taste.'
    ]
  }
];