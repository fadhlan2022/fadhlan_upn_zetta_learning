import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-input',
  templateUrl: './items-input.component.html',
  styleUrls: ['./items-input.component.scss']
})
export class ItemsInputComponent implements OnInit {
  @Input('taskElement') element: { type: string; name: string; content: string; } | undefined;

  constructor() { }

  ngOnInit(): void {
  }


}
