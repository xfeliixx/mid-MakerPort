import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevicesTimeEstimateComponent } from './devices-time-estimate.component';

describe('DevicesTimeEstimateComponent', () => {
  let component: DevicesTimeEstimateComponent;
  let fixture: ComponentFixture<DevicesTimeEstimateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesTimeEstimateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevicesTimeEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
