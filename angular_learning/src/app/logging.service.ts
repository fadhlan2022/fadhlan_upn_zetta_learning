import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('The status is changed, new status : ' + status);
  }
  constructor() {}
}
