import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: Recipe;
    id: number;


    constructor(private recipeService: RecipeService, private shopService: ShoppingListService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // const id = this.route.snapshot.params['id'];not goot way
        this.route.params
            .subscribe((params: Params) => {this.id = +params['id']
                this.recipe = this.recipeService.getRecipeById(this.id);
            });
    }

    onAddToShoppingList() {
        this.shopService.addIngFromRecipe(this.recipe.ingredients);
    }

    onEdit() {
        // this.router.navigate(['edit'],{relativeTo: this.route}); 1st variant
        this.router.navigate(['../', this.id, 'edit'],{relativeTo: this.route}); // 2nd variant
    }


}
