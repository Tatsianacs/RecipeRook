import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Draniki', 'Draniki is one of the most popular and famous dishes of the Belarusian cuisine.\n' +
            '\n' +
            'Although there are many similar recipes for potato pancakes in various countries, Belarusian draniki is famous for its rich taste, national culinary secrets and the floury Belarusian potatoes – bulba – with their fluffy, dry texture that is perfect for making potato pancakes.', 'https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg'),
        new Recipe('Pizza', 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients baked at a high temperature, traditionally in a wood-fired oven', 'https://www.gastronom.ru/binfiles/images/00000010/00025686.jpg'),
        new Recipe('Under Fur Coat Salad (Shuba)', 'traditional layered salad made of finely chopped pickled herring, eggs, beets, carrots, potatoes and some type of dressing, either mayonnaise or a sour cream base.', 'https://img07.rl0.ru/eda/c620x415i/s2.eda.ru/StaticContent/Photos/111021125327/150116204034/p_O.jpg'),
        new Recipe('Sushi', 'Sushi is a Japanese dish of specially prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, combined with a variety of ingredients', 'http://setsushi.ru/wp-content/uploads/2016/12/obychn-s-lososem.jpg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
