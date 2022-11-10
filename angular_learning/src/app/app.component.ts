import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { ItemsService } from './items.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService, ItemsService],
})
export class AppComponent implements OnInit {
  title = 'angular_learning';
  itemList: { itemName: string; itemStatus: string }[] = [];
  constructor(
    private itemService: ItemsService,
    private loggingService: LoggingService
  ) {}
  updateStatus(index: number) {
    this.itemService.updateStatus(index);
    this.loggingService.logStatusChange(this.itemList[index].itemStatus);
  }
  changeAllStatus(status: string) {
    this.itemService.changeAllStatus(status);
  }
  ngOnInit(): void {
    this.itemList = this.itemService.itemList;
  }
  destroyItem(index: number) {
    this.itemService.destroyItem(index);
  }
}
