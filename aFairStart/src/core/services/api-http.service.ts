import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW46YWRtaW4=');
  constructor(private http: HttpClient) {
  }

  public get(url: string, options?: any) {
    return this.http.get(url, { headers: this.headers, params: options });
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, { headers: this.headers, params: options });
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, { headers: this.headers, params: options });
  }

  public delete(url: string, options?: any) {
    return this.http.delete(url, { headers: this.headers, params: options });
  }
}
