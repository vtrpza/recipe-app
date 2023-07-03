import React from "react";
import RecipeList from "./../components/RecipeList";

function HomePage() {
  return (
    <div>
      <header>
        <h1>Receitas da Dri</h1>
      </header>
      <main>
        <RecipeList />
      </main>
    </div>
  );
}

export default HomePage;
