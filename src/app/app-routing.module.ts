import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/home/about/about.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { JobsComponent } from './components/home/jobs/jobs.component';
import { ProyectsComponent } from './components/home/proyects/proyects.component';
import { HomeComponent } from './components/home/home.component';
import { MoreProyectsComponent } from './components/home/more-proyects/more-proyects.component';

const routes: Routes = [

  { path: '', component: BannerComponent },
  {path: 'banner', component: BannerComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'job', component: JobsComponent},
  {path: 'project', component:ProyectsComponent },
  {path: 'about', component: AboutComponent},
  {path: 'moreproject', component: MoreProyectsComponent},

  //{ path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
