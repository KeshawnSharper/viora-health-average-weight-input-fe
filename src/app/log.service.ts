import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpClient:HttpClient) { }
  api = `http://127.0.0.1:8000/`

  inputDays(input:any){
    console.log("input",input.value)
    return this.httpClient.post<any>(this.api + "input/",input.value)
  }
  getInput(){
    return this.httpClient.get<any>(this.api + "input/")
  }
}
