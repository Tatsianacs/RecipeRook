import {Component, EventEmitter, Output} from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    @Output() recipesClicked = new EventEmitter<string>();
    @Output() listClicked = new EventEmitter<string>();

    onRecipesClick(){
        this.recipesClicked.emit('recipes');
    }

    onListClick() {
        this.listClicked.emit('list');
    }
}
