import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})
export class SideContentComponent implements OnInit {
  @Input() showTrends:any
  @Input() showLogs:any
  @Input()isTrendsShowing:any
  constructor() { }

  ngOnInit(){
  }
 

}
