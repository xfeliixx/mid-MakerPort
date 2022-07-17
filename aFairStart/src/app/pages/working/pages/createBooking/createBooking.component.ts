import { Component, OnInit } from '@angular/core';
import { ApiEndpointsService } from 'src/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/core/services/api-http.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './createBooking.html',
  styleUrls: ['./createBooking.scss'],
})
export class CreateBookingComponent implements OnInit {

  project: string;
  //TODO Beispielname ändern 
  teamMates: string[] = new Array("Beispielname (Me)");
  timeEstimateHour: number;
  timeEstimateMinutes: number;
  dateFromDatePicker: string;

  constructor(private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService) { }

  ngOnInit() {

  }


  public addTeamMate() {
    //TODO
    console.log('addTeamMate');
  }

  public createBooking() {
    if (this.teamMates.length > 0 && this.timeEstimateHour != null && this.timeEstimateMinutes != null && this.dateFromDatePicker != null) {
      const javaTimeDateString = this.convertDateFromDatePickerToJavaLocalDate(this.dateFromDatePicker);
      const timeEstimateInMinutes = this.convertEstimateTimeToMinutes(this.timeEstimateHour, this.timeEstimateMinutes);
    }
  }

  private convertEstimateTimeToMinutes(hours: number, minutes: number): number {
    return (hours * 60 + minutes);
  }

  private convertDateFromDatePickerToJavaLocalDate(date: string) {
    var dateFormat = date.split('+')[0];
    console.log(dateFormat);
  }

}
