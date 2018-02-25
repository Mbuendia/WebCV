import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
@Component({
    selector: 'dialog-component',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss'],
  })
  export class DialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Object) {}
  }