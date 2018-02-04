import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShoppinlistModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from 'app/recipe/recipes.module';
import { AppRoutingModule } from 'app/routes/app-router.module';
import { SharedModule } from 'app/shared/shared.module';
import { AuthModule } from 'app/auth/auth.module';

import { AppComponent } from './app.component';
//import { HeaderComponent } from './Header/header.component';


// import { AuthGuard } from 'app/auth/auth-guard.service';
// import { AuthService } from 'app/auth/auth.service';
// import { DataStorageService } from 'app/shared/services/data-storage.service';
// import { ShoppinglistService } from '../app/shared/services/shoppinglist.service';
// import { RecipeService } from '../app/shared/services/recipe.service';
//import { HomeComponent } from './home/home.component';
// import { SignUpComponent } from './auth/sign-up/sign-up.component';
// import { SignInComponent } from './auth/sign-in/sign-in.component';
import { CoreModule } from 'app/core/core.module';


@NgModule({
   declarations: [
       AppComponent,
               ],
     imports: [
       BrowserModule,
       FormsModule,
       HttpModule,
       ReactiveFormsModule,
       AppRoutingModule,
       RecipesModule,
       SharedModule,
       ShoppinlistModule,
       AuthModule,
       CoreModule
     ],
     schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
     bootstrap: [AppComponent]

})
export class AppModule { }
