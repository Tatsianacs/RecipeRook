import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Draniki', 'Draniki is one of the most popular and famous dishes of the Belarusian cuisine.\n' +
            '\n' +
            'Although there are many similar recipes for potato pancakes in various countries, Belarusian draniki is famous for its rich taste, national culinary secrets and the floury Belarusian potatoes – bulba – with their fluffy, dry texture that is perfect for making potato pancakes.', 'https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg', [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]),
        new Recipe('Pizza', 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients baked at a high temperature, traditionally in a wood-fired oven', 'https://www.gastronom.ru/binfiles/images/00000010/00025686.jpg', [new Ingredient('Potato', 10), new Ingredient('Egg', 1)]),
        new Recipe('Under Fur Coat Salad (Shuba)', 'traditional layered salad made of finely chopped pickled herring, eggs, beets, carrots, potatoes and some type of dressing, either mayonnaise or a sour cream base.', 'https://img07.rl0.ru/eda/c620x415i/s2.eda.ru/StaticContent/Photos/111021125327/150116204034/p_O.jpg', [new Ingredient('Carrot', 1), new Ingredient('Beat', 5)]),
        new Recipe('Sushi', 'Sushi is a Japanese dish of specially prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, combined with a variety of ingredients', 'http://setsushi.ru/wp-content/uploads/2016/12/obychn-s-lososem.jpg', [new Ingredient('Fish', 1), new Ingredient('Rice', 10)])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipies() {
        return this.recipes.slice(); //new array so that it is not shared
    }

    getRecipeById(id: number) {
        return this.recipes[id]; // we can do here Object.assign or slice()
    }

    addIngToShoppingList(ings: Ingredient[]) {
        this.shoppingListService.addIngFromRecipe(ings);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipiesByFetch(recipies: Recipe[]) {
        this.recipes = recipies;
        this.recipesChanged.next(this.recipes.slice());
    }
}
