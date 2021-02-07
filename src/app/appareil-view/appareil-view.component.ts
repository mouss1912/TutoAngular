import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  //Le property binding = liaison par propriété
  isAuth = false; // propriété lié au html par le []
  appareils: any[];
  //Creer uner nouvelle subscirption
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    //this.appareils = this.appareilService.appareils;
    //Aprés subscribe
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      //resultat
      (appareils: any[]) => {
        this.appareils = appareils;
      },
      (error) => {
        console.log("erreur dans subscribe AppareilViewComponent" + error)
      },
      () => {
        console.log("Observable complete !")
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  //le Event Biding : pour réagir dans typeScript aux événements venant du template html
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  /**
   *   Arreter la subscription
   */
  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

  /**
   *   Méthode pour enregistrer un appareil dans BD
   */
  onSave() {
    this.appareilService.saveAppareilsToServer();
  }
  
  /**
   * Méthode pour recupérer la liste des appareils
   */
  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
