package org.back.recipe.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.back.recipe.model.CreateRecipeInput;
import org.back.recipe.model.CreateRecipeOutput;
import org.back.recipe.model.RecipeDTO;
import org.back.recipe.services.RecipeService;
import org.springframework.http.HttpStatus;
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

  @GetMapping()
  public ResponseEntity<List<RecipeDTO>> getAllRecipes() {
    return ResponseEntity.ok(recipeService.getAllRecipes());
  }

  @PostMapping()
  public ResponseEntity<CreateRecipeOutput> createRecipe(@RequestBody CreateRecipeInput createRecipeInput) {
    CreateRecipeOutput createRecipeOutput = recipeService.createRecipe(createRecipeInput);
    return ResponseEntity.status(HttpStatus.CREATED).body(createRecipeOutput);
  }

}
