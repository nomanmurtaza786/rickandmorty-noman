import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GetApisService } from 'src/app/services/get-apis/get-apis.service';
import { CharacterDetailsPage } from 'src/app/pages/character-details/character-details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  getItemlist: any = [];
  filterTerm: string;
page: number = 1;
  constructor(private getapi: GetApisService, public modalController: ModalController) {
    this.getCharacterData()
  }

  // get data from service api
  getCharacterData() {
    this.getapi.getcharacterapi(this.page)
      .subscribe((data: any) => {
        console.log('data', data);
        this.getItemlist.push(...data.results);
        console.log('data', this.getItemlist);
      });
  }
  async presentModal(item) {
    console.log('item',item)
    const modal = await this.modalController.create({
      component: CharacterDetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        item: item,
      }
    });
    return await modal.present();
  }
  
  loadData(event) {
    this.page = this.page + 1;
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
this.getCharacterData();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.getItemlist.length == 1) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
