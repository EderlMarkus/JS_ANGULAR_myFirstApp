import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  item: Item;

  constructor() {
    this.item = {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      age: 0,
      dob: '',
      salary: 0,
      address: '',
      id: 0,
      imageUrl:
        'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
    };
  }
}
