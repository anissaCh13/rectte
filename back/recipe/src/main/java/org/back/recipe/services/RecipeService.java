package org.back.recipe.services;

import java.util.List;
import org.back.recipe.model.CreateRecipeInput;
import org.back.recipe.model.CreateRecipeOutput;
import org.back.recipe.model.RecipeDTO;

public interface RecipeService {

  List<RecipeDTO> getAllRecipes();

  CreateRecipeOutput createRecipe(CreateRecipeInput createRecipeInput);

}
