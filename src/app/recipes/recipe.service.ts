import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable() // 서비스에서 서비스 호출
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20)
      ]),
    new Recipe('B Test Recipe',
      'This is simply a test22',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }


  getRecipes() {
    return this.recipes.slice(); // slice 얕은 복사로 원본 말고 복사본을 리턴한다.
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);
  }


}
