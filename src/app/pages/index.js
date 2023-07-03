import React from "react";
import RecipeList from "./../components/RecipeList";

function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to My Recipe App</h1>
      </header>
      <main>
        <RecipeList />
      </main>
    </div>
  );
}

export default HomePage;
