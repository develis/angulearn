import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrimeirosPassosComponent } from './primeiros-passos/primeiros-passos.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path: 'videos', component: VideosComponent
  },
  {
    path: 'primeirospassos', component: PrimeirosPassosComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
