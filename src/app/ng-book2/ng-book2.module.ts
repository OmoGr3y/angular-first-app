import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from '../components/hello-world/hello-world.component';
import { UserItemComponent } from '../components/user-item/user-item.component';



@NgModule({
  declarations: [HelloWorldComponent, UserItemComponent],
  exports: [
    HelloWorldComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgBook2Module { }
