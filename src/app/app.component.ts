import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyCZ17mCtKkm7vj8ZVEW9caiurE7gYMK00E",
            authDomain: "recipebook-d6230.firebaseapp.com"
        });
    }

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }

}
