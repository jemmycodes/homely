import MealsItem from "./MealsItem";
import yamFood from "../../assets/yam-food.svg";

const FOODS_DATA = [
  {
    id: "food_01",
    price: "500",
    food: "Yam and Egg Sauce",
    img: yamFood,
  },
  {
    id: "food_02",
    price: "500",
    food: "Spag and Pepper Sauce",
    img: yamFood,
  },
  {
    id: "food_03",

    price: "500",
    food: "Porridge Beans",
    img: yamFood,
  },
  {
    id: "food_04",

    price: "500",
    food: "Yam and Egg Sauce",
    img: yamFood,
  },
  {
    id: "food_05",

    price: "500",
    food: "Spag and Pepper Sauce",
    img: yamFood,
  },
  {
    id: "food_06",

    price: "500",
    food: "Porridge Beans",
    img: yamFood,
  },
];

function Meals() {
  const meals = FOODS_DATA.map((meal) => (
    <MealsItem
      food={meal.food}
      img={meal.img}
      price={meal.price}
      key={meal.id}
    />
  ));

  return (
    <section className="p-5">
      <p className="text-center text-orange text-3xl font-bold">
        Our daily dishes
      </p>
      <p className="text-center">Check our recommended dishes of your choice</p>
      <div className=" mt-24 grid grid-cols-1 grid-rows-1 max-w-6xl mx-auto justify-items-center  self-center gap-x-32 gap-y-20 md:grid-rows-2 md:grid-cols-3">
        {meals}
      </div>
    </section>
  );
}

export default Meals;
