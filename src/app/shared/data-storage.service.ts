import {Injectable} from "@angular/core";
import { Http, Response } from '@angular/http';
import {RecipeService} from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
       return this.http.put('https://recipebook-d6230.firebaseio.com/recipes.json', this.recipeService.getRecipies());
    }
}
