import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modul2',
  templateUrl: './modul2.component.html',
  styleUrls: ['./modul2.component.scss']
})
export class Modul2Component implements OnInit {
  user = ['Victor','Jeff','Robert'];
  currentStatus1 = 'offline';
  currentStatus2 = 'offline';
  currentStatus3 = 'offline';
  status = true;

  changeStatus1(){
    this.currentStatus1 = "online";
  }
  changeStatus2(){
    this.currentStatus2 = "online";
  }
  changeStatus3(){
    this.currentStatus3 = "online";
  }

  constructor() { 
  }


  ngOnInit(): void {
  }

}