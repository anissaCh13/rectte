export interface CreateRecipeInput {
  title: string,
  description: string | null,
  ingredients: Ingredient[]
}

export interface Ingredient {
  name?: string | null,
  quantity?: number | null,
  unit?: string | null
}
