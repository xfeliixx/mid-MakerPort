import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ApiEndpointsService } from 'src/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/core/services/api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  hasActiveBooking: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  activeBooking;
  activeBookingStart;
  activeBookingEnd;
  timeLeft: number = 2;
  countdownConfig: CountdownConfig = { leftTime: this.timeLeft, demand: false, format: 'hh:mm' };
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;


  show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSignedOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) { }



  ngOnInit(): void {
    this.apiHttpService
      .get(this.apiEndpointsService.getCurrentBooking())
      .subscribe(
        (data) => {
          this.activeBooking = JSON.parse(JSON.stringify(data[0]));
          this.activeBookingStart = this.splitTimeHHMM(
            this.activeBooking.scheduledStart
          );
          this.activeBookingEnd = this.splitTimeHHMM(
            this.activeBooking.scheduledEnd
          );
          if (this.activeBooking == null || this.activeBooking == undefined) {
            this.hasActiveBooking = new BehaviorSubject<boolean>(false);
          } else if (this.activeBooking.done == false) {
            this.timeLeft = this.getTimeLeft(this.activeBooking.scheduledEnd);
            this.countdownConfig.leftTime = this.timeLeft;
            this.hasActiveBooking = new BehaviorSubject<boolean>(true);
            setTimeout(() => {
              this.countdown.begin();
            })
          }
        },
        (error) => {
          console.log('Errr: ' + error.status);
        }
      );
  }

  private splitTimeHHMM(date: string): string {
    let result = date.split('T')[1];
    return result.split(':')[0] + ':' + result.split(':')[1];
  }

  //großer Player in Modal
  public showModal() {
    if (this.activeBooking.done == false) {
      this.show = new BehaviorSubject<boolean>(true);
    }
  }

  public dismissModal() {
    this.show = new BehaviorSubject<boolean>(false);
  }

  private getTimeLeft(end): number {
    return (new Date(end).getTime() - Date.now()) / 1000
  }

  public signOn() {
    this.apiHttpService
      .put(
        this.apiEndpointsService.putSignOn(this.activeBooking.id) + '/signOn',
        null
      )
      .subscribe(
        (data) => {
          this.isSignedOn = new BehaviorSubject<boolean>(true);
          this.show = new BehaviorSubject<boolean>(false);
        },
        (error) => {
          console.log(error.status);
        }
      );
  }

  public signOff() {
    this.apiHttpService
      .put(
        this.apiEndpointsService.putSignOff(this.activeBooking.id) + '/signOff',
        null
      )
      .subscribe(
        (data) => {
          this.isSignedOn = new BehaviorSubject<boolean>(false);
        },
        (error) => {
          console.log(error.status);
        }
      );
  }
}
