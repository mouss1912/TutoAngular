import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  secondes: number;
  // creer un subscription qui stock l'objet Observable
  counterSubscription: Subscription;
  constructor() {

  }
  /*
   NB: un Observable est un objet qui émet des informations auxquelles on souhaite réagir.  
   Ces informations peuvent venir d'un champ de texte dans lequel l'utilisateur rentre des données,
    ou de la progression d'un chargement de fichier, par exemple. 
     Elles peuvent également venir de la communication avec un serveur : 
    le client HTTP, que vous verrez dans un chapitre ultérieur, emploie les Observables. 
    */

  ngOnInit(): void {
    //je crée un observable
    const counter = Observable.interval(1000);
    /*//Methode 1 : subscire directement
    //je subscribe à mon observable counter
    counter.subscribe(
      // l'observable envoi toujours 3 fonction annonymes : result, error et complet
      (result) => {
        this.secondes = result;
      },
      (error) => {
        console.log("erreur dans l'observable counter de App :" + error)
      },
      () => {
        console.log("Observable couter complet")
      }

    )
      */
     // Methode 2 avec la subscription : cette méhtode évite le comportement infini de l'observable
     this.counterSubscription = counter.subscribe(
      (result) => {
        this.secondes = result;
      },
      (error) => {
        console.log("erreur dans l'observable counter de App :" + error)
      },
      () => {
        console.log("Observable couter complet")
      }
     )
  }
  // Pour détruire la subscription
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
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
