import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-noticia-details',
  templateUrl: './noticia-details.component.html',
  styleUrls: ['./noticia-details.component.scss']
})
export class NoticiaDetailsComponent implements OnInit, OnChanges {

  @Input() noticia: any = {};
  @Output() onClear: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Cambio :D", changes)
  }

  clearNoticia() {
    this.noticia = {};
    this.onClear.emit();
  }

}
