import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class MyRestService {
  constructor(private http: HttpClient) {}

  addNotes(data: NgForm) {
    return this.http.post('http://localhost:3000/note', data);
  }
  public getNotes(): Observable<any> {
    const url = 'http://localhost:3000/note';
    return this.http.get<any>(url);
  }
}
