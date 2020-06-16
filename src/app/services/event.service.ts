import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  value = new Subject();
  watch = this.value.asObservable();
  constructor() {}

  publish(val) {
    this.value.next(val);
  }
}
