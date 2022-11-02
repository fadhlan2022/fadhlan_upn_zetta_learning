import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  user = ['Fadhlan','Hisyam','Ucok'];
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