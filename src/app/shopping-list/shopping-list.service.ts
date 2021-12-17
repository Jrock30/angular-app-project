import {IngredientModel} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<IngredientModel[]>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // 얕은복사
  }

  addIngredient(ingredient: IngredientModel) {
    /**
     * 얕은 복사로 다른 곳에서 가져가기 때문에 바로 먹히지 않는다.
     * 그래서 위에서 EventEmitter 를 생성하고 이벤트를 내보내주고 subscribe 한다
     *
     * 이렇게 쓰기 싫으면 slice() 를 제거하고 그냥 원본 그대로 내보내면 된다.
     */
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice()); // 원본에 푸쉬하고 얕은 복사본을 실어서 방출, 다른곳에서 구독
  }

  addIngredients(ingredients: IngredientModel[]) { // RecipeService 에서 요청한다.
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients); // 위처럼 다른 메서드 호출하지 않고 직접 구현, es6 문법
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
