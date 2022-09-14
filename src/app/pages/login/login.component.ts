import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEndpointsService } from 'src/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/core/services/api-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  usern: string;
  passw: string;
  constructor(private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService, private router: Router) { }

  ngOnInit() { }

  login() {
    if (this.usern != null && this.passw != null) {
      localStorage.setItem("Authorization", btoa(this.usern + ":" + this.passw));
    }
    this.apiHttpService
      .get(this.apiEndpointsService.getLogin())
      .subscribe(
        (data) => {
          this.router.navigate(["home"]);
        },
        (error) => {
          this.usern = "";
          this.passw = "";
          this.router.navigate([""]);
        })

  }
}
