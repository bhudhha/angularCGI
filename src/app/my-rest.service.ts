import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class MyRestService {
  private apiUrl = ' http://localhost:3000/auth/v1';
  constructor(private http: HttpClient) {}

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
}
