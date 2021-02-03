import { Subject } from 'rxjs';

export class AppareilService{
  //création du subject
  appareilSubject = new Subject<any[]>();
  //ajout private pour la mise en place du subject
   private appareils = [
        { 
        id:1,
        name : 'Machine à laver',
        status : 'éteint'
        },
        {  
            id : 2,
          name : 'Telephone',
          status : 'allumé'
        },
        {
            id : 3,
          name : 'Ordinateur',
          status : 'éteint'
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
    emitAppareilSubject(){
      // next : la methode next force le subject à emmetre ce qu'on lui passe comme argument
      //slice : pour emmetre une copie de cet aray (la liste des appareils)
      this.appareilSubject.next(this.appareils.slice());
    }

      //allume ou étteint tous les appareils
      switchOnAll(){
          for(let appareil of this.appareils){
              appareil.status = 'allumé';
          }
          //on passe le subject à toutes les fonctions 
          this.emitAppareilSubject();
      }
      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.status = 'éteint';
          }
          this.emitAppareilSubject();
      }

      // allume ou étteint un appareil
      switchOnOne(index : number){
          this.appareils[index].status ='allumé';
          this.emitAppareilSubject();
      }
      switchOffOne(index : number){
          this.appareils[index].status = 'éteint';
          this.emitAppareilSubject();
      }


}