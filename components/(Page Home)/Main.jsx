import MainPicture from './MainPicture/MainPicture';
import Navigation from './Navigation/Navigation';
import FoodSection from './FoodSection/FoodSection';
import AboutCafe from './AboutCafe/AboutCafe';
import Map from './Map/Map';
import Cover from './Cover/Cover';
import { coldAppetizers } from '@/data/coldAppetizers';
import { hotAppetizers } from '@/data/hotAppetizers';
import { meatDishes } from '@/data/meatDishes';
import { soups } from '@/data/soups';
import { fishDishes } from '@/data/fishDishes';
import { grillDishes } from '@/data/grillDishes';
import { brandedDishes } from '@/data/brandedDishes';
import { drinks } from '@/data/drinks';

export default function Main() {
  return (
    <main>
      <MainPicture />
      <Navigation />
      <FoodSection title="Холодные закуски" id="coldAppetizers" data={coldAppetizers} priority />
      <FoodSection title="Горячие закуски" id="hotAppetizers" data={hotAppetizers} />
      <FoodSection title="Мясные блюда" id="meatDishes" data={meatDishes} />
      {/* <FoodSection title="Супы" id="soups" data={soups} /> */}
      {/* <FoodSection title="Рыбные блюда" id="fishDishes" data={fishDishes} /> */}
      {/* <FoodSection title="Гриль меню" id="grillDishes" data={grillDishes} /> */}
      {/* <FoodSection title="Фирменные блюда" id="brandedDishes" data={brandedDishes} /> */}
      {/* <FoodSection title="Напитки" id="drinks" data={drinks} /> */}
      <AboutCafe />
      <Map />
      <Cover />
    </main>
  );
}
