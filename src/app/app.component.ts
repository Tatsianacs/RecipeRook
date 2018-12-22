import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentLink: string;

    onRecipiesClicked(titleClicked) {
        this.currentLink = titleClicked;
        console.log(this.currentLink);
    }

    onListClicked(titleClicked) {
        this.currentLink = titleClicked;
        console.log(this.currentLink);
    }
}
