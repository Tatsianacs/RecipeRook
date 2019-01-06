import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {
    }

    storeRecipes() {
        return this.http.put('https://recipebook-d6230.firebaseio.com/recipes.json', this.recipeService.getRecipies());
    }

    fetchRecipes() {
        return this.http.get('https://recipebook-d6230.firebaseio.com/recipes.json')
            .subscribe((response: Response) => {
                const recipes: Recipe[] = response.json();
                console.log(recipes);
                this.recipeService.updateRecipiesByFetch(recipes);
            })
    }
}
