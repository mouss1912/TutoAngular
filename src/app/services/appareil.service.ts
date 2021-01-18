export class AppareilService{
    appareils = [
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
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
    }

      //allume ou étteint tous les appareils
      switchOnAll(){
          for(let appareil of this.appareils){
              appareil.status = 'allumé';
          }
      }
      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.status = 'éteint';
          }
      }

      // allume ou étteint un appareil
      switchOnOne(index : number){
          this.appareils[index].status ='allumé';
      }
      switchOffOne(index : number){
          this.appareils[index].status = 'éteint';
      }

}