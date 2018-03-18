import { Component, Inject, ViewEncapsulation  ,  ElementRef} from '@angular/core';
import { FirebaseApp } from 'angularfire2';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ResumeComponent {
  url: any;

  el;
  constructor(@Inject(FirebaseApp) firebaseApp: any) {
    const storageRef = firebaseApp.storage().ref().child('cvMarioBV.pdf');
   this.url= storageRef.getDownloadURL();
    
   this.url.then( url => {
    document.getElementById('embedid').setAttribute('data', url);
    document.getElementById('ahref').setAttribute('href', url);
  } )
  }

  ngOnInit(){
     
  }
}