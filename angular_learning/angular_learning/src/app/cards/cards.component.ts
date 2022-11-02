import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  user = ['Fadhlan','Hisyam','Ucok'];
  currentStatus1 = "offline";
  currentStatus2 = "offline";
  currentStatus3 = "offline";
  currentButton1 = "online";
  currentButton2 = "online";
  currentButton3 = "online";
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
  
  changeButton1(){
    this.currentButton1 = "online";
  }
  changeButton2(){
    this.currentButton2 = "offline";
  }
  changeButton3(){
    this.currentButton3 = "offline";
  }

  constructor() { 
  }


  ngOnInit(): void {
  }

}