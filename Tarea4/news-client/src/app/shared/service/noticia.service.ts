import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
  private favoritos: number = 0;

  favoritosObservable: BehaviorSubject<number> = new BehaviorSubject(0);

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

  countFavoritos(favorito:boolean): void{
    if(favorito) {
      this.favoritos ++;
    } else {
      this.favoritos --;
    }
    // Asignas nuevo valor a observable. Entonces los métodos suscritos se van a disparar y van a recibir un 3
    this.favoritosObservable.next(this.favoritos);
  }


}