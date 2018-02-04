import { NgModule } from '@angular/core/src/metadata/ng_module';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
declarations:[DropdownDirective],
exports:[CommonModule,DropdownDirective]
})
export class SharedModule {}
