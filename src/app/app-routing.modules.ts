import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    {
     // path: '',
      path: 'home/:id',     
      component: HomeComponent
    },
    {
      //path: 'about',
      path: 'about/:id',     
      component: AboutComponent
    }
  ];