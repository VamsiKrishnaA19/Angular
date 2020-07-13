import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http: HttpClient) { }

  getRestoList() {
    return this.http.get(environment.branchesUrl);
  }

  getRestoInfoByID(restoId:any) {
    return this.http.get(`${environment.branchesUrl}/${restoId}`);
  }

  addResto(data:any) {
    return this.http.post(`${environment.branchesUrl}`, data);
  }

  editResto(restoId:any, data:any) {
    return this.http.put(`${environment.branchesUrl}/${restoId}`, data);
  }

  deleteResto(restoId:any) {
    return this.http.delete(`${environment.branchesUrl}/${restoId}`);
  }

  addstaff(data:any){
    return this.http.post(`${environment.staffUrl}`, data);
  }
  adminLogin(){
    return this.http.get(`${environment.adminUrl}`);
  }

  staffLogin(){
    return this.http.get(`${environment.staffUrl}`);
  }
  
  getCustomerComments(){
    return this.http.get(`${environment.commentsUrl}`);
  }
  
  addCustomerComments(data:any){
    return this.http.post(`${environment.commentsUrl}`, data);
  }

  contactUs(data:any){
    return this.http.post(`${environment.contactUsUrl}`, data);
  }
}
