import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Search until you get content",
};

async function MealsFetch() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}

function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite receipes</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <MealsFetch />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
