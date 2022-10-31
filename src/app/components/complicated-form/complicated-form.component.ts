import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  ILocalItems,
  ILocalItemsInside,
  ISalesTaxArray,
} from '../model/intefaces';

@Component({
  selector: 'app-complicated-form',
  templateUrl: './complicated-form.component.html',
  styleUrls: ['./complicated-form.component.scss'],
})
export class ComplicatedFormComponent {
  totalAmount = 0;
  totalTaxes = 0;

  submitForm(form: NgForm) {
    console.log(form);
  }

  titleList = ['Category', 'Items', 'Gl Code', 'Amount', 'Sales Tax', 'Total'];

  localItems: ILocalItems[] = [
    {
      id: 1,
      name: 'Category 1',
      items: [
        {
          id: 1,
          name: 'Item 1',
          glCode: 1,
          amount: null,
          salesTax: null,
        },
      ],
    },
  ];

  salesTaxList: ISalesTaxArray[] = [
    { id: 1, title: 'No tax', value: 0 },
    { id: 2, title: 'USA', value: 10 },
    { id: 3, title: 'Russia', value: 20 },
  ];

  addCategory() {
    let newCategory: ILocalItems = {
      id: +new Date().getTime(),
      name: 'Category',
      items: [
        {
          id: -new Date().getTime(),
          name: 'Item',
          glCode: 1,
          amount: null,
          salesTax: null,
        },
      ],
    };
    this.localItems = [...this.localItems, newCategory];
  }

  removeCategory(id: number) {
    const idx = this.localItems.findIndex((item: any) => item.id === id);
    if (idx !== -1) {
      this.localItems.splice(idx, 1);
    }
  }

  addItem(id: number) {
    let newItem: ILocalItemsInside = {
      id: -new Date().getTime(),
      name: 'Item',
      glCode: 1,
      amount: null,
      salesTax: null,
    };
    this.localItems.find((item) => {
      if (item.id === id) {
        item.items = [...item.items, newItem];
      }
    });
  }

  removeItem(catId: number, itemId: number) {
    // баг с пересчетом суммы при удалении элементов (потом подумоть)
    this.localItems.find((cat) => {
      if (cat.id === catId) {
        cat.items = cat.items.filter((item) => item.id !== itemId);
      }
    });
    this.getTotal();
  }

  getTotal(isAmount?: boolean) {
    console.log(isAmount);

    let total = 0;

    this.localItems.forEach((item) => {
      total = item.items.reduce((acc, curr) => {
        if (isAmount) {
          return acc + +curr.amount;
        }

        return acc + curr.salesTax;
      }, total);
    });

    if (isAmount) this.totalAmount = total;
    else this.totalTaxes = total;
  }
}
