import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberFormComponent } from './member/member-form/member-form.component';

const routes: Routes = [{
  path: 'membre',
  component: MemberFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


