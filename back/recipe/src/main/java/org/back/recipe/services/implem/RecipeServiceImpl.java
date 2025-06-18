package org.back.recipe.services.implem;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.back.recipe.entity.Recipe;
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
}
