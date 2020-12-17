import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowCursoPage } from './show-curso.page';

describe('ShowCursoPage', () => {
  let component: ShowCursoPage;
  let fixture: ComponentFixture<ShowCursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
