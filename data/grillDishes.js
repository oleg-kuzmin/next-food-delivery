import imageGrillChicken from '@/public/images/cards/31. grillChicken.jpg';
import imageGrilZucchini from '@/public/images/cards/32. grilZucchini.jpg';
import imageGrillChikenWings from '@/public/images/cards/33. grillChikenWings.jpg';
import imageGrillMushrooms from '@/public/images/cards/34. grillMushrooms.jpg';
import imageGrillEggplant from '@/public/images/cards/35. grillEggplant.jpg';
import imageGrillMutton from '@/public/images/cards/36. grillMutton.jpg';

export const grillDishes = [
  {
    title: 'Куриное филе',
    image: imageGrillChicken,
    weight: 300,
    price: 470,
    id: 'grillChicken',
    description: 'сочное филе с овощами',
    type: 'grillDishes',
    counter: 0,
  },
  {
    title: 'Кабачки',
    image: imageGrilZucchini,
    weight: 350,
    price: 430,
    id: 'grilZucchini',
    description: 'с оливковым маслом, лимонным соком и чесноком',
    type: 'grillDishes',
    counter: 0,
  },
  {
    title: 'Куриные крылышки',
    image: imageGrillChikenWings,
    weight: 340,
    price: 470,
    id: 'grillChikenWings',
    description: 'жаренные в остром соусе на гриле',
    type: 'grillDishes',
    counter: 0,
  },
  {
    title: 'Грибы',
    image: imageGrillMushrooms,
    weight: 310,
    price: 410,
    id: 'grillMushrooms',
    description: 'с паприкой и фаршированные сыром',
    type: 'grillDishes',
    counter: 0,
  },
  {
    title: 'Баклажан',
    image: imageGrillEggplant,
    weight: 320,
    price: 440,
    id: 'grillEggplant',
    description: 'запеченный с беконом',
    type: 'grillDishes',
    counter: 0,
  },
  {
    title: 'Стейк баранины',
    image: imageGrillMutton,
    weight: 350,
    price: 510,
    id: 'grillMutton',
    description: 'с соусом из ревеня',
    type: 'grillDishes',
    counter: 0,
  },
];
