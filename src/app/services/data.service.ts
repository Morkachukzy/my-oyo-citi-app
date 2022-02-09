import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/globalconstants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = GlobalConstants.baseUrl+"api";
  constructor(
    private http:HttpClient,
  ) { }
  addReport(report:object) {
    return this.http.post(this.api, report);
  }
  deleteReport(report:object){
    return this.http.delete(this.api, report);
  }
  getReport(report:object){
    return this.http.get(this.api, report);
  }
  updateReport(report:object){
    return this.http.put(this.api, report);
  }
}
