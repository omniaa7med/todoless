import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DragTimerComponent } from './drag-timer/drag-timer.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProfileComponent } from './profile/profile.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
<<<<<<< HEAD
=======
import { StrangerProfileComponent } from './stranger-profile/stranger-profile.component';
>>>>>>> blue


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'account/:id',component:AccountComponent,children:[
    {path:'friends',component:AllFriendsComponent},
    {path:'projects',component:AllProjectsComponent},
    {path:'profile',component:ProfileComponent},
<<<<<<< HEAD
=======
    {path:'user/:name',component:StrangerProfileComponent}
>>>>>>> blue
  ]},
  {path:'timer',component:DragTimerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
