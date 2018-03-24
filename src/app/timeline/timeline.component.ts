import { Component, OnInit, ViewEncapsulation , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {
  @Input() expArr: Array<any>;
  show: boolean = true;

  constructor(public dialog: MatDialog ) { 
  }
  ngOnInit() {

    console.log(this.expArr[this.expArr.length-1])
    if(this.expArr[this.expArr.length-1].Fecha_End == 'Now') 
        this.expArr[this.expArr.length-1].Fecha_End = new Date();
  }
  showchips(){
    this.show = !this.show;
  }
  handleClick($event, i){
    this.dialog.open(DialogComponent, {
      data: {
        selected: this.expArr[i],
        show: true,
      }
    });
  }
      


}