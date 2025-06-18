package org.back.recipe.services.implem;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.back.recipe.entity.Ingredient;
import org.back.recipe.entity.Recipe;
import org.back.recipe.model.CreatRecipeInput;
import org.back.recipe.model.RecipeDTO;
import org.back.recipe.repository.RecipeRepository;
import org.back.recipe.services.RecipeService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {

  private final RecipeRepository recipeRepository;

  @Override
  public List<RecipeDTO> getAllRecipes() {
    List<Recipe> recipes = recipeRepository.findAll();
    return recipes.stream().map((recipe -> RecipeDTO.builder().title(recipe.getTitle()).description(recipe.getDescription()).build())).toList();
  }

  @Override
  public Recipe createRecipe(CreatRecipeInput creatRecipeInput) {
    // Create the Recipe object first
    Recipe recipe = Recipe.builder()
        .title(creatRecipeInput.title())
        .description(creatRecipeInput.description())
        .build();

    List<Ingredient> ingredients = creatRecipeInput.ingredients().stream()
        .map(ingredient -> Ingredient.builder()
            .name(ingredient.name())
            .unit(ingredient.unit())
            .quantity(ingredient.quantity())
            .recipe(recipe)
            .build()
        )
        .toList();

    recipe.setIngredients(ingredients);

    // Save the Recipe (Ingredients will be saved automatically due to CascadeType.PERSIST)
    return recipeRepository.save(recipe);
  }
}
