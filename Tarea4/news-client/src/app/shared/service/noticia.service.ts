import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Noticia } from 'src/app/shared/interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private search: string = '';
  private noticia: Noticia = {
    title:'',
    description: '',
    url: ''
  };
  constructor(private http: HttpClient) { }

  getNoticias(q:string): Observable<any>{
    const url = `${environment.apiUrl}everything?q=${q}&apiKey=${environment.apiKey}`;
    return this.http.get(url);
  }

  setCurrentNoticia(noticia: Noticia) {
    this.noticia= noticia;
    localStorage.setItem('noticia', JSON.stringify(noticia));
    console.log('Se guardó la noticia ', this.noticia);
  }

  setCurrentSearch(search: string) {
    this.search= search;
    localStorage.setItem('search', search);
    console.log('Se guardó la búsqueda', this.search);
  }

  getCurrentNoticia():Noticia {
    if(!this.noticia.title){
      const noticia = localStorage.getItem('noticia') || "{title: '', description: '', url: ''}";
      this.noticia = JSON.parse(noticia);
    }
    return this.noticia;
  }

  getCurrentSearch():string {
    if(!this.search){
      this.search = localStorage.getItem('search') || "";
    }
    return this.search;
  }
}