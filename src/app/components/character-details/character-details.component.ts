import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  item: any;
 Toggle = false;
  constructor(public navParams: NavParams, public modalController: ModalController) {
    this.item = this.navParams.get("item");
    console.log(this.item)
   }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  editPerson(){
    if(!this.Toggle){
      this.Toggle = true;

    } else{
      this.Toggle = false;
    }
  }
}
