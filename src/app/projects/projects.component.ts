import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FirebasecvListComponent} from '../firebase/firebasecv-list.component' 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  
  listProjects: Observable<any[]>;
  constructor(private firebasecompo:  FirebasecvListComponent) { 
  }
  
  
  ngOnInit() {
    this.listProjects = this.firebasecompo.getPath('/CV/projects');


  }
  
    
}