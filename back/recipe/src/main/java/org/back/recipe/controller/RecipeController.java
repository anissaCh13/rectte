package org.back.recipe.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import org.back.recipe.model.RecipeDTO;
import org.back.recipe.services.RecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class RecipeController {

  RecipeService recipeService;

  @GetMapping("/recipes")
  public ResponseEntity<List<RecipeDTO>> getAllRecipes() {
    return ResponseEntity.ok(recipeService.getAllRecipes());
  }

}
