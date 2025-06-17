package org.back.recipe.services.implem;

import java.util.List;
import org.back.recipe.model.RecipeDTO;
import org.back.recipe.services.RecipeService;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {


  @Override
  public List<RecipeDTO> getAllRecipes() {
    return List.of(RecipeDTO.builder().title("my first Recipe").description("my description").ingredients(List.of("piment", "sauce")).build());
  }
}
