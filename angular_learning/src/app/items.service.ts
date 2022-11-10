import { Component, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  itemList = [
    { itemName: 'Item 1', itemStatus: 'Good' },
    { itemName: 'Item 2', itemStatus: 'Broken' },
  ];
  constructor() {}
  onAddItems(name: string, status: string) {
    this.itemList.push({
      itemName: name,
      itemStatus: status,
    });
  }

  updateStatus(index: number) {
    if (this.itemList[index].itemStatus === 'Perfect') {
      this.itemList[index].itemStatus = 'Good';
    } else if (this.itemList[index].itemStatus === 'Good') {
      this.itemList[index].itemStatus = 'Broken';
    } else {
      this.itemList[index].itemStatus = 'Perfect';
    }
  }
  changeAllStatus(status: string) {
    let i = 0;
    for (let list of this.itemList) {
      this.itemList[i].itemStatus = status;
      i++;
    }
  }
  destroyItem(index: number) {
    this.itemList.splice(index, 1);
  }
}
