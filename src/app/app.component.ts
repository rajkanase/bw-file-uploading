import { Component } from '@angular/core';
import { Upload } from './upload';
import { UploadService } from './upload.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: any;
 
  filesToUpload: Array<File> = [];
  constructor(private http : Http){

  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/api/', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.product.photo = fileInput.target.files[0]['name'];
  }

}
