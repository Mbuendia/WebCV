import { Component, OnInit, ViewEncapsulation , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {
  @Input() expArr: string;
  show: boolean = true;

  constructor( ) { }

  ngOnInit() {
  }
  showchips(){
    this.show = !this.show;
  }
 handleClick($event, i){
   alert(i);
 }


      
}