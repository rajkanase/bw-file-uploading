import { Component, OnInit} from '@angular/core';
import { UploadService } from '../upload.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: File

  progress: { percentage: number } = { percentage: 0 }

  ngOnInit(){
    
  }
  
  constructor(
    private upSer:UploadService
  ) {}







  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    // console.log("In Upload fun", this.currentFileUpload);
    
    this.upSer.pushFileToStorage(this.currentFileUpload).subscribe(res =>console.log(res));


    // this.selectedFiles = undefined
  }
}
