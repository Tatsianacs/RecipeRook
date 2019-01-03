import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;
    recipeForm: FormGroup;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            })
    }


    onSubmit() {
        console.log('submit' + this.recipeForm);
    }

    private initForm() {
        let recipeName = '';
        let recipeImgPath = '';
        let description = '';
        let recipeIng = new FormArray([]);

        if (this.editMode) {
            const recipe = this.recipeService.getRecipeById(this.id);
            recipeName = recipe.name;
            recipeImgPath = recipe.imagePath;
            description = recipe.description;
            if (recipe['ingredients']) {
                for (let ing of recipe.ingredients) {
                    recipeIng.push(new FormGroup({
                        'name': new FormControl(ing.name, Validators.required),
                        'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImgPath, Validators.required),
            'description': new FormControl(description, Validators.required),
            'ingredients': recipeIng
        });
    }

    onAddIngredient(){
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
            'name': new FormControl(null, Validators.required),
            'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
    }

    getControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }
}
