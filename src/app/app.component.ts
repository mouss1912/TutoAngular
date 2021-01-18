import { Component, OnInit } from '@angular/core';
import { resolve, reject } from 'q';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
// Dans appareilService
//appareils : any[];
  //injection de AppareilService
  constructor(){

  }


  
  /*
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  // onEteindre(){
  //   this.appareilService.switchOffAll();
  // }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
}
*/
}
