import Link from "next/link";

export default function MealDetailsPage({ params }) {
  const readableSlug = params.mealSlug
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");

  return (
    <main>
      <h1>{readableSlug}</h1>
      <p>Meal details coming soon.</p>
      <p>
        <Link href="/meals">Back to all meals</Link>
      </p>
    </main>
  );
}
