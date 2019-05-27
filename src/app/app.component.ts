import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'blog-openclassroom';


    constructor() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDCUgTumSdw8Uc6SnHqTp4H2dMsf9INmd0",
            authDomain: "posts-9ae1e.firebaseapp.com",
            databaseURL: "https://posts-9ae1e.firebaseio.com",
            projectId: "posts-9ae1e",
            storageBucket: "posts-9ae1e.appspot.com",
            messagingSenderId: "434709461304",
            appId: "1:434709461304:web:754a87cf0f059b03"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

}



