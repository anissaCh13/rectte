package org.back.recipe.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.back.recipe.entity.Recipe;
import org.back.recipe.model.CreatRecipeInput;
import org.back.recipe.model.RecipeDTO;
import org.back.recipe.services.RecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recipes")
public class RecipeController {

  private final RecipeService recipeService;

  @GetMapping("")
  public ResponseEntity<List<RecipeDTO>> getAllRecipes() {
    return ResponseEntity.ok(recipeService.getAllRecipes());
  }

  @PostMapping()
  public ResponseEntity<Recipe> createRecipe(@RequestBody CreatRecipeInput creatRecipeInput) {
    Recipe recipe = recipeService.createRecipe(creatRecipeInput);
    return ResponseEntity.ok(recipe);
  }

}
