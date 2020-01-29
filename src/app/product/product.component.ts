import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	
	@ViewChild('searchbar', null) searchbar: ElementRef;
  searchText = '';

  searchVisible: boolean = false;

   version = VERSION;

  data: any[] = [];
  item: any = "";
  createItem(index: number) {
    return { id: index, name: `Item ${index}`, details: `item ${index} details` };
  }
  createRandomItem() {
    const int: number = parseInt((Math.random() * 100) + '', 10);
    return this.createItem(int);
  }
  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.data.push(this.createRandomItem());
    }
  }
  onOpenMenu(menu: any): void {}
  onSelected(item: any) {
    this.item = item;
  }
  isSelected(item: any) {
    return this.item === item;
  }
  onAddItem() {
    this.data.push(this.createRandomItem());
  }
  onRemoveItem(item: any) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  onRemoveAll(){
    this.data = [];
  }
  
    openSearch() {
    this.searchVisible= true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.searchVisible = false;
  }

}
