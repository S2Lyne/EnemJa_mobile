import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadernosPage } from './cadernos.page';

describe('CadernosPage', () => {
  let component: CadernosPage;
  let fixture: ComponentFixture<CadernosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadernosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadernosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
