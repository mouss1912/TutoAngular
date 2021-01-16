import { Component, OnInit, Input } from '@angular/core';

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
@Input() appareilName: string;
@Input() appareilStatus: string;
  constructor() { }

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
}
