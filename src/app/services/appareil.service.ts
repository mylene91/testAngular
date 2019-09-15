export class AppareilService {

  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Télévision',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    },
  ];


  // allumer tous les appareils
  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé'
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint'
    }
  }

}
