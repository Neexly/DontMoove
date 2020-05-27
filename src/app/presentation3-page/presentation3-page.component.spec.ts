import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Presentation3PageComponent } from './presentation3-page.component';

describe('Presentation3PageComponent', () => {
  let component: Presentation3PageComponent;
  let fixture: ComponentFixture<Presentation3PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Presentation3PageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Presentation3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
