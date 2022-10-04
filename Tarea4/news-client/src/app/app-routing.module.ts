import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaDetailsPageComponent } from './pages/noticias/noticia-details-page/noticia-details-page.component';

//Define objetos, tiene objetos que responden en que ruta
const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'noticias', component: NoticiasComponent},
	{ path: 'noticias/nueva', component: HomeComponent},
	{ path: 'noticias/:titulo', component: NoticiaDetailsPageComponent},
	
	{ path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }