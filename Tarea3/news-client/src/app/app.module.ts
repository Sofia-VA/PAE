import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layer/header/header.component';
import { FooterComponent } from './layer/footer/footer.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { MyuppercasePipe } from './shared/pipe/myuppercase.pipe';
import { NoticiaDetailsComponent } from './pages/noticias/noticia-details/noticia-details.component';
import { NoticiasListComponent } from './pages/noticias/noticias-list/noticias-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    HomeComponent,
    NotFoundComponent,
    MyuppercasePipe,
    NoticiaDetailsComponent,
    NoticiasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
