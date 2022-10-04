import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

//Define objetos, tiene objetos que responden en que ruta
const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'noticias', component: NoticiasComponent},
	{ path: 'noticias/nueva', component: HomeComponent},
	{ path: 'noticias/:titulo', component: NoticiasComponent},
	
	{ path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }