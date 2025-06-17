package org.back.recipe.model;

import java.util.List;
import lombok.Builder;

@Builder
public record RecipeDTO(String title, String description, List<String> ingredients) {
}
