import { Component, OnInit } from '@angular/core';
import { Devices } from 'src/app/shared/classes/devices';
import { ApiEndpointsService } from 'src/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/core/services/api-http.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit {

  public deviceDetails;


  constructor(private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService) { }

  ngOnInit() {
    console.log(this.apiEndpointsService.getAllMockUsers());
    this.apiHttpService
      .get(this.apiEndpointsService.getAllMockUsers())
      .subscribe((data: Devices[]) => {
        this.deviceDetails = data[0].type;
        console.log(data[0]);
      });

  }

}
