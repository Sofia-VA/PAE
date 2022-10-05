import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/app/shared/service/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent implements OnInit {
  noticias: any = []; //[{title:'',url:''}]; // 
  cargando: boolean = false;

  search: string = '';
  lastSearch: string = '';

  current: any = {title: 'Ejemplo'};

  constructor(private newsService: NoticiaService, private activatedRoute: ActivatedRoute){}

  //ngOnInit es un hook
  ngOnInit():void{
    //Así?
    this.activatedRoute.queryParams.subscribe((q) => {
      if (q["search"] != null) {
        console.log("QueryParams:",q);
        this.search = q['search'];
        this.buscar();
      }
      
    });
  }

  buscar(): void {
    this.cargando = true;
    this.newsService.getNoticias(this.search).subscribe({
      next: (response) =>{
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
        this.search = '';
        this.newsService.setCurrentSearch(this.lastSearch);
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    })
  }

  setSearch(e: any) {
    console.log('Key event:', e);
    this.search = e.target.value;
    if (e.key === 'Enter'){
      this.buscar();
    }
  }

  selectNoticia(noticia:any){
    console.log('Seleccionó noticia: ', noticia);
    this.current = noticia;
    this.newsService.setCurrentNoticia(noticia);
  }

  clearCurrent(){
    this.current = {};
  }
}
  

