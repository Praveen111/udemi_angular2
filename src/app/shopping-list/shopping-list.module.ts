import { NgModule } from "@angular/core/src/metadata/ng_module";
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { CommonModule } from "@angular/common/src/common_module";
import { FormsModule } from "@angular/forms";

@NgModule({
declarations:[ShoppingListComponent, ShoppingEditComponent],
imports:[CommonModule, FormsModule, ShoppingRoutingModule]
})

export class ShoppinlistModule {}
