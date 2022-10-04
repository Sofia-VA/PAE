import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {

  @Input() noticias: any = [];
  @Input() current: any = {};
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectNoticia(elemento: any){
    this.onSelect.emit(elemento);
  }

}
