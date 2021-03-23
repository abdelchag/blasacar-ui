import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { TravelComponent } from './travel.component';

const routes: Routes = [
  {
    path: 'travel',
    component: TravelComponent,
  
  children: [
    { path: 'travel-propose', component: TravelProposeComponent},
    { path: 'travel-list', component: TravelListComponent},
    {
        path: '',
        redirectTo: 'travel-list',
        pathMatch: 'full'
      }
    ]
    }
]


  @NgModule({
    imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
    exports: [
      RouterModule
    ]
  })


export class TravelRoutedModule { }