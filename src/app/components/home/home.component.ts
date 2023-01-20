import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }

  deleteItem(item: Item) {
    //if API Service would work:
    // this.itemService
    //   .deleteItem(item)
    //   .subscribe(
    //     () => (this.items = this.items.filter((i) => i.id !== item.id))
    //   );

    this.items = this.items.filter((i) => i.id !== item.id);
  }
}
