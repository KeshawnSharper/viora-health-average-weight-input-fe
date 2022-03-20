import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
isTrendsShowing: boolean = false;
events: string[] = [];
opened: boolean;
  constructor() { }

  ngOnInit(){
  }
 

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  showTrends = () => {
    this.isTrendsShowing = true;
  }
  showLogs = () =>{
    this.isTrendsShowing = false;
  }

}


