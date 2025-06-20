package org.back.recipe.model;

import java.util.List;

public record CreateRecipeInput(String title, String description, List<IngredientDTO> ingredients) {

}
