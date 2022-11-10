import { Component, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  itemList = [
    { itemName: 'Item 1', itemStatus: 'Baik' },
    { itemName: 'Item 2', itemStatus: 'Rusak Ringan' },
  ];
  constructor() {}
  onAddItems(name: string, status: string) {
    this.itemList.push({
      itemName: name,
      itemStatus: status,
    });
  }

  updateStatus(index: number) {
    if (this.itemList[index].itemStatus === 'Baik') {
      this.itemList[index].itemStatus = 'Rusak Ringan';
    } else if (this.itemList[index].itemStatus === 'Rusak Ringan') {
      this.itemList[index].itemStatus = 'Rusak Berat';
    } else {
      this.itemList[index].itemStatus = 'Baik';
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
