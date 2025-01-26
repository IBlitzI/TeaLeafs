export interface Recipe {
  id: number;
  name: string;
  ailments: string[];
  ingredients: string[];
  steps: string[];
  description: string;
  image?: string;
  benefits: string[];
}