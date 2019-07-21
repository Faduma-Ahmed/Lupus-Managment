import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddNutritionComponent } from './add-nutrition/add-nutrition.component';
import { AddActivityComponent } from './add-activity/add-activity.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'user-data', component:  UserDataComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'add-nutrition', component: AddNutritionComponent },
      { path: 'add-activity', component: AddActivityComponent },
      { path: '**', redirectTo: 'user-profile' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule { }
