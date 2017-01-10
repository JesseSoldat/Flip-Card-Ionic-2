import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	flashCards: any;

  constructor(public navCtrl: NavController) {
  	this.flashCards = [
      {front: 'FRONT', back: 'BACK'},
      {front: 'Hello', back: 'GoodBye'},
      {front: 'Konichiwa', back: 'Konbanwa'},
      {front: 'Sawadi Krap', back: 'Sawadi Ka'}

    ];

  }

}
