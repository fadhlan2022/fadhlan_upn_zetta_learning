import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../logging.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss'],
  providers: [],
})
export class ItemInputComponent implements OnInit {
  newItemName: string = '';
  newItemStatus: string = '';

  public defaultStatus: string = 'Perfect';
  public defaultName: string = 'Item x';

  @ViewChild('itemNameInput') itemNameInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private itemService: ItemsService
  ) {}

  ngOnInit(): void {}

  addItem(name: string, status: string) {
    this.itemService.onAddItems(name, status);
    console.log(this.itemNameInput);
    this.loggingService.logStatusChange(status);
  }
}
