import { Component, OnInit, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {LogService} from "../log.service"
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() changeIsTrendShowing: any
  weightInputForm: FormGroup = new FormGroup({
    weight: new FormControl(""),
    date: new FormControl('')
  })
  constructor(private LogService:LogService) { }

  ngOnInit(): void {
  }
  submit = () => {
    this.LogService.inputDays(this.weightInputForm).subscribe(data => {
    })
  }

}
