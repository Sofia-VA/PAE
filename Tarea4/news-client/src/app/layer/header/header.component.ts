import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/service/noticia.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  favoritos: number = 0;

  constructor(private newsService: NoticiaService) { }

  ngOnInit(): void {
    this.newsService.favoritosObservable.subscribe((f:number) => {
      this.favoritos = f;
    });
  }

}
