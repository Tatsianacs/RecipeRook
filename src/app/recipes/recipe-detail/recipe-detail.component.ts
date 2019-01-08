import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {AuthService} from "../../auth/auth.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: Recipe;
    id: number;


    constructor(private recipeService: RecipeService, private shopService: ShoppingListService, private route: ActivatedRoute, private router: Router, private authService: AuthService) {
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
        if (this.authService.isAuthenticated()) {
            // this.router.navigate(['edit'],{relativeTo: this.route}); 1st variant
            this.router.navigate(['../', this.id, 'edit'],{relativeTo: this.route}); // 2nd variant
        } else {
            this.router.navigate(['signin']);
        }

    }

    onDelete() {
        if (this.authService.isAuthenticated()) {
            this.recipeService.deleteRecipe(this.id);
            this.router.navigate(['/recipes']);
        } else {
            this.router.navigate(['signin']);
        }

    }
}
