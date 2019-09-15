import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

// decorateur @Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // title = 'premiers pas vers Angular !';
  // est-ce que l'utilisateur est authentifié ? Par défaut false
  isAuth =  false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      // fonction annonyme qui passera isAuth à true au bout de 4 secondes
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  // le tableau appareil sera égal au tableau dans le service dédié
  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }


    onAllumer() {
      this.appareilService.switchOnAll();
    }

    onEteindre() {
      this.appareilService.switchOffAll();
    }

}
