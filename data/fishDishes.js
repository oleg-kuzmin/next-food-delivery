import imageFishGreek from '@/public/images/cards/25. fishGreek.jpg';
import imageFishCheese from '@/public/images/cards/26. fishCheese.jpg';
import imageFishTriangles from '@/public/images/cards/27. fishTriangles.jpg';
import imageBakedRollsFish from '@/public/images/cards/28. bakedRollsFish.jpg';
import imageMackerelSourCream from '@/public/images/cards/29. mackerelSourCream.jpg';
import imageTroutSteak from '@/public/images/cards/30. troutSteak.jpg';

export const fishDishes = [
  {
    title: 'Рыба по-гречески',
    image: imageFishGreek,
    weight: 370,
    price: 390,
    id: 'fishGreek',
    description: 'Запеченная под соусом из помидоров с гарниром',
    type: 'fishDishes',
    counter: 0,
  },
  {
    title: 'Рыбное филе',
    image: imageFishCheese,
    weight: 400,
    price: 365,
    id: 'fishCheese',
    description: 'в сырном кляре, нежная, рассыпающаяся во рту, с гарниром',
    type: 'fishDishes',
    counter: 0,
  },
  {
    title: 'Треугольники',
    image: imageFishTriangles,
    weight: 450,
    price: 380,
    id: 'fishTriangles',
    description: 'c тунцом, сыром, помидорами, яйцом, укропом и сметаной',
    type: 'fishDishes',
    counter: 0,
  },
  {
    title: 'Рыбные рулеты',
    image: imageBakedRollsFish,
    weight: 420,
    price: 450,
    id: 'bakedRollsFish',
    description: 'из филе с начинкой из помидоров и сыра, запечённые в фольге',
    type: 'fishDishes',
    counter: 0,
  },
  {
    title: 'Скумбрия',
    image: imageMackerelSourCream,
    weight: 450,
    price: 510,
    id: 'mackerelSourCream',
    description: 'со сметаной, соевым соусом и зернистой горчицей',
    type: 'fishDishes',
    counter: 0,
  },
  {
    title: 'Стейк форели',
    image: imageTroutSteak,
    weight: 400,
    price: 570,
    id: 'troutSteak',
    description: 'с соусом из авокадо, свежего базилика и сока лайма',
    type: 'fishDishes',
    counter: 0,
  },
];
