import imageLemonade from '@/public/images/cards/43. lemonade.jpg';
import imageCola from '@/public/images/cards/44. cola.jpg';
import imageGingerTea from '@/public/images/cards/46. gingerTea.jpg';
import imageCoffee from '@/public/images/cards/48. coffee.jpg';

export const additionOrders = [
  {
    title: 'Лимонад (набор)',
    image: imageLemonade,
    weight: 750,
    price: 600,
    id: 'lemonade',
    description: 'лимон и апельсин, лайм и имбирь, клубника и ревень',
    type: 'drinks',
    counter: 0,
  },
  {
    title: 'Домашняя кола',
    image: imageCola,
    weight: 250,
    price: 200,
    id: 'cola',
    description: 'из растворимого цикория с сахаром и сладким шиповниковым сиропом',
    type: 'drinks',
    counter: 0,
  },
  {
    title: 'Имбирный чай',
    image: imageGingerTea,
    weight: 250,
    price: 200,
    id: 'gingerTea',
    description: 'с куркумой, корицей, лимонным соком и медом',
    type: 'drinks',
    counter: 0,
  },
  {
    title: 'Кофе',
    image: imageCoffee,
    weight: 250,
    price: 200,
    id: 'coffee',
    description: 'из свежих ароматных зерен, с молоком и сахаром',
    type: 'drinks',
    counter: 0,
  },
];
