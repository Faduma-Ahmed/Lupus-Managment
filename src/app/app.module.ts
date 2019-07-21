import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/auth.service';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { ChartsModule } from 'ng2-charts';
import { UserDataComponent } from './user-data/user-data.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddNutritionComponent } from './add-nutrition/add-nutrition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddActivityComponent } from './add-activity/add-activity.component';



library.add(fas);


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DashboardComponent,
    UserDataComponent,
    UserLoginComponent,
    AddNutritionComponent,
    AddActivityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CoreModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatMenuModule,
    FontAwesomeModule,
    ChartsModule
  ],
  providers: [AngularFireAuth,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
