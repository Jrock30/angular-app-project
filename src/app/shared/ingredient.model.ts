export class IngredientModel { // 필드를 제거하고 생성자 인수에 접근제어자를 추가하여 간단하게 표현할 수 있다.(숏컷)
  constructor(public name: string, public amount: number) {}
}
