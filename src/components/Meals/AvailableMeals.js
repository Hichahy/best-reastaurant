import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const FAIRYTALE_MEALS = [
  {
    id: "a1",
    name: "The Gingerbread Man",
    description: "Plate of gingerbread pancakes.",
    price: "3",
  },
  {
    id: "a2",
    name: "Rapunzel",
    description: "Grilled Salmon with Peach and Avocado Salsa",
    price: "13.99",
  },
  {
    id: "a3",
    name: "Cinderella",
    description: "This princess stays optimistic as she slurps on pumpkin soup",
    price: "5.50",
  },
  {
    id: "a4",
    name: "Open Sezam Gold Rush",
    description: "Hundred kilograms of edible gold flakes from mythical sezam",
    price: "1000",
  },
];

const AvailableMeals = () => {
  const mealsList = FAIRYTALE_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
