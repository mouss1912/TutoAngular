import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

export class AppareilService {
  //création du subject
  appareilSubject = new Subject<any[]>();
  //ajout private pour la mise en place du subject
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Telephone',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  // recupérer un appareil via l'id dans app-view-component
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }
  // methode qui emet les données reçu du subject
  emitAppareilSubject() {
    // next : la methode next force le subject à emmetre ce qu'on lui passe comme argument
    //slice : pour emmetre une copie de cet aray (la liste des appareils)
    this.appareilSubject.next(this.appareils.slice());
  }

  //allume ou étteint tous les appareils
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    //on passe le subject à toutes les fonctions 
    this.emitAppareilSubject();
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  // allume ou étteint un appareil
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  //methode d'envoi des données du formulaire
  onSubmit(form: NgForm) {
    const name = form.value["name"];
    const status = form.value["status"];
    console.log(form.value);
  }
  // Methode de création d'un nouveau appareil
  addAppareil(name : string, status : string ) {
    const appareilObject = {
      id : 0,
      name : '',
      status : ''
    };
    // valeurs passé pour name et status dans le formulaire
    appareilObject.name = name;
    appareilObject.status = status;
    //l'id du dernier élément actuel de l'array + 1;
    appareilObject.id = this.appareils[(this.appareils.length -1)].id +1;
    // Ajout de l'objet dans l'array appareils
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();

  }
}