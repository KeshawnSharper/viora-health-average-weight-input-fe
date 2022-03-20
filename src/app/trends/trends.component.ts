import { Component, OnInit,ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import {LogService} from "../log.service"
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor(private LogService: LogService) { }
  daysGraphinfo:any = {day_text_labels:[]}
  loadingInfo: boolean = true
  dailyChart : any = []
  weeklyChart : any = []
  isDailyChart: boolean = true
  ngOnInit(){
    this.LogService.getInput().subscribe(data => {
      console.log(data)
      this.daysGraphinfo = this.getGraphInfo(data)
      this.loadingInfo = false
      this.dailyChart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.isDailyChart ? this.daysGraphinfo.day_text_labels : this.daysGraphinfo.monday_of_week_text_labels,
          datasets: [
            {
              data: this.isDailyChart ? this.daysGraphinfo.average_day_weights : this.daysGraphinfo.average_week_weights,
              borderColor: 'white',
              label: this.isDailyChart ? 'Average Day Weight' : 'Average Week Weight',
              backgroundColor: 'black',
              hoverBackgroundColor: "#0fa",
              hoverBorderColor: "black",
              borderWidth: 3,
            },
          ],
        },
      })

      // this.weeklyChart = new Chart('canvas2', {
      //   type: 'bar',
      //   data: {
      //     labels: this.daysGraphinfo.monday_of_week_text_labels,
      //     datasets: [
      //       {
      //         data: this.isDailyChart ? this.daysGraphinfo.average_week_weights,
      //         borderColor: '#3e95cd',
      //         label: 'Average Week Weight',
      //         backgroundColor: 'rgba(93, 175, 89, 0.1)',
      //         borderWidth: 3,
      //       },
      //     ],
      //   },
      // })
    })
  
  

  }
  getDailyChart = () => {
    
  }
  getGraphInfo = (data:any) => {
    let day_text_labels: string[]= []
    let average_day_weights : string[]= []
    let monday_of_week_text_labels : string[] = []
    let average_week_weights : string[]= []

    for (let i = 0; i < data.days.length; i++) {
        let element = data.days[i]
        day_text_labels.push(element["day_text"].toString())
        average_day_weights.push(element["average_input_weight"].toString())
    }
    for (let i = 0; i < data.weeks.length; i++) {
      let element = data.weeks[i]
      monday_of_week_text_labels.push("week of " +  element["monday_of_week_text"].toString())
      average_week_weights.push(element["average_input_weight"].toString())
  }
    console.log(day_text_labels)
      return {"day_text_labels":day_text_labels,"average_day_weights":average_day_weights,"monday_of_week_text_labels":monday_of_week_text_labels,"average_week_weights":average_week_weights}

  }
showDailyChart = () => {
  this.isDailyChart = true
  this.ngOnInit()
  this.dailyChart.destroy()
}
showWeeklyChart = () => {
  this.isDailyChart = false
  this.ngOnInit()
  this.dailyChart.destroy()

}

}
