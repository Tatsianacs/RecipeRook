import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
    ingredientsChanged =  new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    addIngredients(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice(); //if we want to have it updated. we shouldn't use SLICE
    }

    addIngFromRecipe(ing: Ingredient[]) {
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
