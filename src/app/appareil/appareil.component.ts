import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  /* En dur */ 
// appareilName = 'Machine à laver';
// appareilStatus = 'eteint';
/* Avec Input */
// le @Input c'est pour capturer et travailler avec les variables en property binding
@Input() appareilName: string;
@Input() appareilStatus: string;
@Input() indexOfAppareil: number;
@Input() id: number;
  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }
  //les directives stucturelles : ngIf et ngFor : pour structurer le document
  //les directives par attribut : ngStyle et ngClass qui permet de modifier les comportments des components qui sont dans le document

  getColor(){
    if(this.appareilStatus === 'alumé'){
      return 'green';
    }else if (this.appareilStatus === 'éteint'){
      return 'red';
    }
  }
  //methode appellant les methodes de AppareilService
  
//   onSwitchOn(){
//     this.appareilService.switchOnOne(this.indexOfAppareil);
//   }
//  onSwitchOff(){
//    this.appareilService.switchOffOne(this.indexOfAppareil)
//  }
onSwitch() {
  if(this.appareilStatus === 'allumé') {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  } else if(this.appareilStatus === 'éteint') {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
}
}
