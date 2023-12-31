import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainNoteComponent } from './main/mainNote/mainNote.component';
import { editNoteComponent } from './main/editNoteWindow/editNote.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    MainComponent,
    MainNoteComponent,
    editNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
