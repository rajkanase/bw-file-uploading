import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UploadService {
  domain = "http://localhost:3000";
  constructor(
    private http: Http
  ) { }


  upFile(formModel) {
    console.log('hi');
    this.http.post(this.domain + '/api/up', formModel).map(res => res.json());
  }

}
