import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { ShoppingListComponent } from './shopping-list.component';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingListComponent},
];
@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
  })
  export class ShoppingRoutingModule {

  }
