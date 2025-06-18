package org.back.recipe.model;

import java.util.List;

public record CreatRecipeInput(String title, String description, List<IngredientDTO> ingredients) {

}
