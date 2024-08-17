import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

function MealGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}

export default MealGrid;
