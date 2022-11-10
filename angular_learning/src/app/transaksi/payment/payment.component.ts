import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked, ViewChild, ElementRef} from '@angular/core';
import { selecteditem } from '../kasir/kasir.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  styles : ['[bgAqua]{  Background-color: green;}',],
})
export class PaymentComponent implements OnInit, AfterContentChecked {
  @ViewChild('bgAqua') bgAqua?:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bgAqua?.nativeElement.setAttribute('bgAqua', '');
  }

  @Input() items!: selecteditem[];
  @Output () itemChanges : EventEmitter<selecteditem[]> = new EventEmitter <selecteditem[]>;

  public total :number = 0;

  ngAfterContentChecked(): void {
    console.log("tes")
    this.total = this.items.reduce((total, item) => total += item.amount * item.price , 0)
  }

  removeItem(itemToBeRemoved:selecteditem){
    const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
    if(this.items[itemIndex].amount>1){
      this.items[itemIndex].amount-=1
    }
    else{
      this.items.splice(itemIndex,1);
    }
  }
}