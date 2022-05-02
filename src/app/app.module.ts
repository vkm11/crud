import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    ListStudentsComponent,
    EditStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
