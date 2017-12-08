import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


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

  pushFileToStorage(file: File): Observable<any> {
    console.log("In File", file);

    let formdata: FormData = new FormData();

    formdata.append('file', file);

    console.log("IN FormData", formdata);

    return this.http.post("http://localhost:3000/api/", formdata);

    // return this.http.request(req);
  }

}
