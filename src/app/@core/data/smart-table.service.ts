import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 'BTL Marketing',
    firstName: '70%',
    lastName: '12%',
    username: '22%',
    email: '11%',
    age: '25%',
  }, {
    id: 'Personalized email',
    firstName: '',
    lastName: '5%',
    username: '9%',
    email: '4%',
    age: '10%',
  }, {
    id: 'Digital',
    firstName: '',
    lastName: '4%',
    username: '7%',
    email: '3%',
    age: '8%',
  }, {
    id: 'Telemarketing',
    firstName: '',
    lastName: '1%',
    username: '2%',
    email: '1%',
    age: '3%',
  }, {
    id: 'Vouchers',
    firstName: '',
    lastName: '5%',
    username: '9%',
    email: '4%',
    age: '10%',
  }, {
    id: 'Customer Services',
    firstName: '30%',
    lastName: '5%',
    username: '9%',
    email: '5%',
    age: '11%',
  }];

  getData() {
    return this.data;
  }
}
