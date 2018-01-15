import { Component } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultFeature = 'recipe';
@ViewChild('val') val;

onNav(val : string){
this.defaultFeature =val;
}

method1(event){
console.log('event',event)
//firstElementChild.className);
console.log(this.val);
this.val.nativeElement.className ="glyphicon glyphicon-chevron-up";
}
method2(event){
  console.log('event',event)
  //firstElementChild.className);
  console.log(this.val)
  this.val.nativeElement.className = "glyphicon glyphicon-chevron-down";
  }

method3(){
  console.log(this.val)
if( this.val.nativeElement.className == 'glyphicon glyphicon-chevron-up'){
  this.val.nativeElement.className = 'glyphicon glyphicon-chevron-down';
} else{
  this.val.nativeElement.className = 'glyphicon glyphicon-chevron-up';
}

}
}
