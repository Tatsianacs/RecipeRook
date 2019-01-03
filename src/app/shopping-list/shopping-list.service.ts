import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
    ingredientsChanged =  new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();


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

    getIng(index: number) {
        return this.ingredients[index];
    }

    addIngFromRecipe(ing: Ingredient[]) {
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIng(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());

    }
}
