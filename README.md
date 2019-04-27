# MonPremierProjet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
>Installer son evironnement de développement : 
* La dernière version de NPM : `npm install -g npm@latest`
* Installer CLI (Command Line Interface ; permet d'executer des scripts pour la création, structuration et production d'une application Angular) : `npm install -g @angular/cli`
* Créer son premier projet : `ng new mon-premier-projet` puis s'y mettre avec `cd` et lancer la commande `ng serve` qui 
va lancer le serveur de developpement (pour regarder comment ça avance en temps réel)

* BOOTSTRAP : `npm install bootstrap --save` (le --save ajoute au package.json du projet)
  * dans le fichier `angular.json` il faut maintenant ajouter Bootstrap à l'application, aller dans l'objet `architect` puis `styles`
  et ajouter `./nodes_modules/bootstrap/dist/css/bootstrap.css",`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
