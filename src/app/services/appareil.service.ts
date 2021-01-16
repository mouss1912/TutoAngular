export class AppareilService{
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