import { Component, OnInit } from '@angular/core';
import { IngredientModel } from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private slService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients(); // 얕은 복사한 것을 주입
    this.slService.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients; // 원본에 푸쉬된 얕은 복사를 구독함.
    })
  }
}
