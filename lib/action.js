"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareAction(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  if (isInvalidText(meal.title) || !meal.image || meal.image.size === 0) {
    return {
      message: "Invalid Input",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals", "page");
  redirect("/meals");
}
