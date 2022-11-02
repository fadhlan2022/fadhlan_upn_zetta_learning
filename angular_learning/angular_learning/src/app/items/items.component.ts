import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  newTaskName = '';
  newTaskContent = '';
  @Output() taskCreated = new EventEmitter<{taskName: string,taskContent: string}>();
  @Output()groupTaskCreated = new EventEmitter<{taskName: string,taskContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddTask() {
    this.taskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }

  onAddGroupTask() {
    this.groupTaskCreated.emit({taskName:this.newTaskName,taskContent:this.newTaskContent})
  }

}
