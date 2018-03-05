import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'firebasecv-list',
  templateUrl: 'firebasecv-list.component.html',
  styleUrls: ['./firebasecv-list.component.scss']
})
export class FirebasecvListComponent implements OnInit {
  cvObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
  }
  ngOnInit() {
    this.cvObservable = this.getPath('/');
  }
  getPath(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
