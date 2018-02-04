import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'firebasecv-list',
  templateUrl: 'firebasecv-list.component.html',
  styles: []
})
export class FirebasecvListComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
  }
  ngOnInit() {
    console.log('hola');
    this.coursesObservable = this.getCourses('/CV');
  }
  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
