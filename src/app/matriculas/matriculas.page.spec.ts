import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatriculasPage } from './matriculas.page';

describe('MatriculasPage', () => {
  let component: MatriculasPage;
  let fixture: ComponentFixture<MatriculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatriculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
