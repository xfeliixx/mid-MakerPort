import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {



  constructor(private http: HttpClient) {
  }

  public get(url: string, options?: any) {
    return this.http.get(url, { headers: this.generateHeader(), params: options });
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, { headers: this.generateHeader(), params: options });
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, { headers: this.generateHeader(), params: options });
  }

  public delete(url: string, options?: any) {
    return this.http.delete(url, { headers: this.generateHeader(), params: options });
  }

  private generateHeader(): HttpHeaders {
    let auth = localStorage.getItem('Authorization');
    console.log(auth);
    if (auth != null) {
      return new HttpHeaders().set('Authorization', "Basic " + auth).set('Content-Type', 'application/json');
    }
  }


}
