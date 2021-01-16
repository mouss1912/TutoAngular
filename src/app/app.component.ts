import { Component, OnInit } from '@angular/core';
import { resolve, reject } from 'q';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout (
        () => {
        resolve(date);
      },2000
      );
    }
  )
// Dans appareilService
appareils : any[];
  //injection de AppareilService
  constructor(private appareilService : AppareilService){
    //se déclenche automatiquement
     setTimeout(
       //fonction annonyme qui active toute les 4 secondes
       () => {
         this.isAuth = true;
       }, 4000
     );
  }

  // Pour aller chercher les infos dans le AppareilService
  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }
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
}
