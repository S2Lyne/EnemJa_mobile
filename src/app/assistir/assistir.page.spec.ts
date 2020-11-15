import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssistirPage } from './assistir.page';

describe('AssistirPage', () => {
  let component: AssistirPage;
  let fixture: ComponentFixture<AssistirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
