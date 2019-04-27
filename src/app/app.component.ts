import { Component } from '@angular/core';

// decorateur @Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'premiers pas vers Angular !';
  // est-ce que l'utilisateur est authentifié ? Par défaut false
  isAuth =  false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';

  constructor() {
    setTimeout(
      // fonction annonyme qui passera isAuth à true au bout de 4 secondes
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
    onAllumer() {
      console.log('On allume tout !');
    }
}
