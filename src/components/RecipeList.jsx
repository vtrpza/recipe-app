import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { useTheme } from "../pages/_app";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("name");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data);
      });
  }, []);

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    paddingTop: "64px",
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    padding: theme.spacing.medium,
  };

  const filterStyle = {
    marginBottom: theme.spacing.medium,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.small,
  };

  const inputStyle = {
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    borderRadius: "4px",
    border: `1px solid ${theme.colors.secondary}`,
    backgroundColor: theme.colors.muted,
    color: theme.colors.text,
    flex: "1",
  };

  const buttonStyle = {
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    borderRadius: "4px",
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    border: "none",
    cursor: "pointer",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing.medium,
  };

  const handleFilter = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSelect = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSort = () => {
    const sortedRecipes = [...filteredRecipes].sort((a, b) => {
      if (sortOrder === "asc") {
        if (filterOption === "time") {
          return a.time[0] - b.time[0];
        } else if (filterOption === "likes") {
          return a.likes[0] - b.likes[0];
        } else if (filterOption === "author") {
          return a.author[0].localeCompare(b.author[0]);
        } else {
          return a.name[0].localeCompare(b.name[0]);
        }
      } else {
        if (filterOption === "time") {
          return b.time[0] - a.time[0];
        } else if (filterOption === "likes") {
          return b.likes[0] - a.likes[0];
        } else if (filterOption === "author") {
          return b.author[0].localeCompare(a.author[0]);
        } else {
          return b.name[0].localeCompare(a.name[0]);
        }
      }
    });
    setFilteredRecipes(sortedRecipes);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const filteredResults = filteredRecipes.filter((recipe) =>
    recipe.name[0].toLowerCase().includes(searchTerm)
  );

  return (
    <div style={containerStyle}>
      <div style={filterStyle}>
        <input
          type="text"
          placeholder="Search recipes..."
          onChange={handleFilter}
          value={searchTerm}
          style={inputStyle}
        />
        <select value={filterOption} onChange={handleSelect} style={inputStyle}>
          <option value="name">Name</option>
          <option value="time">Time</option>
          <option value="likes">Likes</option>
          <option value="author">Author</option>
        </select>
        <button onClick={handleSort} style={buttonStyle}>
          Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>
      <div style={gridStyle}>
        {filteredResults.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <button style={buttonStyle} onClick={toggleTheme}>
        {theme.themeMode === "light"
          ? "Switch to Dark Mode"
          : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default RecipeList;
