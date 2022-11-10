import { Component, OnInit } from '@angular/core';
export interface item {id: number, name: string, des: string, price: number};
export interface selecteditem {id: number, name: string, des: string, price: number, amount: number};

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public items: item[] = [
    {id: 1, name: 'Paket Nasi Telur', des: 'Nasi, Telur (Goreng/Bakar), Sambal, Esteh', price: 10000},
    {id: 2, name: 'Paket Nasi Lele', des: 'Nasi, Lele (Goreng/Bakar), Sambal, Esteh', price: 12000},
    {id: 3, name: 'Paket Nasi Ayam', des: 'Nasi, Ayam (Goreng/Bakar), Sambal, Esteh', price: 13000},
    {id: 4, name: 'Paket Nasi Tempe', des: 'Nasi, Tempe (Goreng/Bakar), Tahu, Sambal, Esteh', price: 8000},
    {id: 5, name: 'Magelangan Gila', des: 'Magelangan, Esteh', price: 12000},
    {id: 6, name: 'Indomie Spesial', des: 'Indomie (Goreng/Rebus), Telur, Esteh', price: 10000},
  ]

  public selectedItems: selecteditem[]=[];

  addItem(item:item){
    const duplicate = this.selectedItems.findIndex(({id}) => id === item.id);
    if(duplicate >= 0){this.selectedItems[duplicate].amount += 1}
    else{this.selectedItems.push({...item, amount: 1})}
  }
}