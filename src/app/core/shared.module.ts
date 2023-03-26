import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { StarComponent } from './components/star/star.component';


@NgModule({
  declarations: [
    ToastComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    ReactiveFormsModule,
    ToastComponent,
    StarComponent


  ],
  providers: []
})
export class SharedModule { }
