import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavigationBarComponent,
    DetailComponentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationBarComponent,
    FooterComponent
  ]
})
export class SharedComponentsModule { }
