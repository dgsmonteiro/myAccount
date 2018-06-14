import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FiltraPorNomePipe } from './filtraPorNome.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    FiltraPorNomePipe
  ],
  exports: [
    ProductComponent,
    FiltraPorNomePipe
  ]
})
export class ProductModule { }
