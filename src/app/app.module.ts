import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from './directive/highlight.directive';
import { LoggerService } from './service/logger.service';
import { ChildrenComponent } from './children/children.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, HighlightDirective, ChildrenComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
