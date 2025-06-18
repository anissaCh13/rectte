package org.back.recipe.services;

import java.util.List;
import org.back.recipe.entity.Recipe;
import org.back.recipe.model.CreatRecipeInput;
import org.back.recipe.model.RecipeDTO;

public interface RecipeService {

  List<RecipeDTO> getAllRecipes();

  Recipe createRecipe(CreatRecipeInput creatRecipeInput);

}
