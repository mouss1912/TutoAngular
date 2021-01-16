import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  // cas1 (1)
  /*
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
*/
// cas1 (2)
appareils = [
  { 
  name : 'Machine à laver',
  status : 'éteint'
  },
  {
    name : 'Telephone',
    status : 'allumé'
  },
  {
    name : 'Ordinateur',
    status : 'éteint'
  }
];
  constructor(){
    //se déclenche automatiquement
     setTimeout(
       //fonction annonyme qui active toute les 4 secondes
       () => {
         this.isAuth = true;
       }, 4000
     );
  }

  onAllumer(){
    console.log('on allume tout !');
  }
}
