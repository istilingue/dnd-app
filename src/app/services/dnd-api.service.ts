import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DndService {

  private http = inject(HttpClient)
  apiUrl: string = 'https://www.dnd5eapi.co'
  currentInformation:BehaviorSubject<string> = new BehaviorSubject('')
  constructor() { }


  getSections(){
    return this.http.get(`${this.apiUrl}/api`)
  }

  getSectionInfo(path:string){
    return this.http.get(`${this.apiUrl}/api/${path}`)
  }
  getInformationDescription(path:string){
    return this.http.get(`${this.apiUrl}${path}`)
  }
}
