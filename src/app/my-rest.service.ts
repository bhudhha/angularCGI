import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class MyRestService {
  constructor(private http: HttpClient) {}
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
  public addNotes(data: NgForm) {
    return this.http.post('http://localhost:3000/note', data);
  }
  public getNotes(): Observable<any> {
    const url = 'http://localhost:3000/note';
    return this.http.get<any>(url);
  }
  public logSubmit(data: any) {
    return this.http.post('http://localhost:3000/user', data);
  }
  public Delete(id: any) {
    return this.http.delete(`http://localhost:3000/note/${id}`);
  }
  public Edit(id: any, data: any) {
    return this.http.put(`http://localhost:3000/note/${id}`, data);
  }
}
