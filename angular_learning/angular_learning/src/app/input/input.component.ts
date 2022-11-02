import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class ItemsInputComponent implements OnInit {
  @Input('taskElement') element: {type: string,name: string,content:string};

  constructor() { }

  ngOnInit(): void {
  }
}