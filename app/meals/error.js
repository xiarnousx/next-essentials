"use client";
export default function ErrorPage({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meals, please try again</p>
    </main>
  );
}
