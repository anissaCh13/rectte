export interface CreateRecipeInput {
  title: string,
  description: string | null,
  ingredients: Ingredient[],
  instruction?: string[]
}

export interface Ingredient {
  name?: string | null,
  quantity?: number | null,
  unit?: string | null
}
