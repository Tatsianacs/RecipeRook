import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
    ingredientsChanged =  new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    addIngredients(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice(); //if we want to have it updated. we shouldn't use SLICE
    }

    addIngFromRecipe(ing: Ingredient[]) {
        this.ingredients.push(...ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}