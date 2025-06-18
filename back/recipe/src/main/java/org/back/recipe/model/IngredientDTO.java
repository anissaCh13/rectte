package org.back.recipe.model;

import org.back.recipe.entity.Unit;

public record IngredientDTO(String name, Double quantity, Unit unit) {

}
