import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { item } from '../kasir/kasir.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
  
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()

  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }
}