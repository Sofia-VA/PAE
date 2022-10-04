import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetailsPageComponent } from './noticia-details-page.component';

describe('NoticiaDetailsPageComponent', () => {
  let component: NoticiaDetailsPageComponent;
  let fixture: ComponentFixture<NoticiaDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
