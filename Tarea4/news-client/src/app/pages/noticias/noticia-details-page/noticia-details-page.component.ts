import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiaService } from 'src/app/shared/service/noticia.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noticia-details-page',
  templateUrl: './noticia-details-page.component.html',
  styleUrls: ['./noticia-details-page.component.scss']
})
export class NoticiaDetailsPageComponent implements OnInit {

  noticia: Noticia = {
    title: '',
    description: '',
    url: ''
  }

  titulo: string = '';

  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // El nombre que defines en la ruta es el nombre de la propiedad, aquí es titulo pe. porq esa es la ruta
    this.activatedRoute.params.subscribe((p) => {
      console.log(p);
      this.titulo = p['titulo'];
    });

    this.noticia = this.noticiaService.getCurrentNoticia();

    if (this.titulo !== this.noticia.title) {
      // Si el usuario cambia la url mientras está viendo noticia
      // alert('La noticia está mal');
      // lo redireccionas
      console.log('Sending query param... : ', this.titulo);
      this.router.navigate(
        ['/noticias'],
        { queryParams: { search: this.titulo } }
      );

      try {
        

      } catch (e) {

      }
      
    } else {
      // console.log('Sending query param... : ', this.titulo);
      // this.router.navigate(
      //   ['/noticias'],
      //   { queryParams: { search: this.titulo } }
      // );
      // this.router.navigate(
      //   ['/noticias']);
    }
    
  }

}