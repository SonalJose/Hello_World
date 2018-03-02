import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';

const appRoutes: Routes = [
    {
       //path: 'about',
       path: 'about/:id', 
        component: AboutComponent
        },
    {
    //path: '',
    path: 'home/:id', 
    component: HomeComponent
    }
    
    ];
  

@NgModule({

declarations: [
AppComponent,
AboutComponent,
HomeComponent
],

imports: [
BrowserModule,
//AppRoutingModule,
RouterModule.forRoot(appRoutes),
FormsModule,
BrowserAnimationsModule
],

providers: [DataService],
bootstrap: [AppComponent]
})

export class AppModule { }