import { Component } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';
// import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  defaultFeature = 'recipe';
  @ViewChild('val') val;

  ngOnInit() {
        firebase.initializeApp({
          apiKey: "AIzaSyB5BD3sgtZcVpB2R2mdIVpwdq5FtQ1_TCg",
          authDomain: "ng-recipe-book-d5584.firebaseapp.com"
        });


  }
  onNav(val: string) {
    this.defaultFeature = val;
  }

  method1(event) {
    console.log('event', event)
    //firstElementChild.className);
    console.log(this.val);
    this.val.nativeElement.className = "glyphicon glyphicon-chevron-up";
  }
  method2(event) {
    console.log('event', event)
    //firstElementChild.className);
    console.log(this.val)
    this.val.nativeElement.className = "glyphicon glyphicon-chevron-down";
  }

  method3() {
    console.log(this.val)
    if (this.val.nativeElement.className == 'glyphicon glyphicon-chevron-up') {
      this.val.nativeElement.className = 'glyphicon glyphicon-chevron-down';
    } else {
      this.val.nativeElement.className = 'glyphicon glyphicon-chevron-up';
    }

  }
}

