"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function Recipe({ recipe }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{recipe.name}</Typography>
        {/* Add more details about the recipe here */}
      </CardContent>
    </Card>
  );
}

export default Recipe;
